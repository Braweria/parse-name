import { prefixes, infixes, suffixes } from "./helpers.js";

function parseName(fullname: string): Person {
  if (typeof fullname !== "string") {
    throw new Error("fullname must be a string");
  }

  const original = fullname;
  let prefix, first, initials, middle, infix, last, suffix;

  let chopped: string = fullname.replace(",", "").trim();
  [prefix, chopped] = findNeedleInHaystack(prefixes, chopped);
  [infix, chopped] = findNeedleInHaystack(infixes, chopped);
  [suffix, chopped] = findNeedleInHaystack(suffixes, chopped);
  [first, middle, initials, last, chopped] = findName(chopped);

  const parsedName: Person = {
    prefix,
    first,
    middle,
    initials,
    infix,
    last,
    suffix,
    full: original,
  };

  return parsedName;
}

export { parseName };

export type Person = {
  prefix: typeof prefixes[number] | null;
  first: string | null;
  initials: string | null;
  middle: string | null;
  infix: typeof infixes[number] | null;
  last: string | null;
  suffix: typeof suffixes[number] | null;
  full: string | null;
};

const sorting = (a: string, b: string) => {
  if (a.length < b.length) {
    return 1;
  }
  if (a.length > b.length) {
    return -1;
  }
  return 0;
};

const findNeedleInHaystack = (
  needles: typeof prefixes[number][],
  haystack: string
): [string | null, string] => {
  const sortedNeedles = needles.sort(sorting);

  if (!haystack) {
    return [null, haystack];
  }

  let found = false;
  let i = 0;
  let result = null;
  let chopped = haystack;

  while (found === false) {
    if (i > sortedNeedles.length - 1) {
      result = null;
      found = true;
      break;
    }

    const wordLength = sortedNeedles[i].length;

    for (let a = 0; a < haystack.length; a++) {
      if (haystack.substr(a, wordLength).toLowerCase() === sortedNeedles[i]) {
        if (
          (haystack[a - 1] === " " && haystack[a + wordLength] === undefined) ||
          (haystack[a - 1] === undefined && haystack[a + wordLength] === " ") ||
          (haystack[a - 1] === " " && haystack[a + wordLength] === " ")
        ) {
          result = haystack.substr(a, wordLength);
          found = true;
          chopped = removeSpaces(haystack.replace(result, ""));
        }
        break;
      }
    }
    i++;
  }

  return [result, chopped];
};

const findName = (
  haystack: string
): [string | null, string | null, string | null, string | null, string] => {
  let chopped = haystack;
  const initialsRegex = /(\S\.\s{0,1})+/u;

  let initials: string | null = null;
  let first: string | null = null;
  let middle: string | null = null;
  let last: string | null = null;

  if (chopped === "" || haystack === "") {
    return [first, middle, initials, last, chopped];
  }

  haystack.split(" ").forEach((hay, i, all) => {
    if (chopped === "" || haystack === "") {
      return;
    }

    const len = all.length - 1;
    if (i === len) {
      last = hay;
      chopped = removeSpaces(chopped.replace(hay, ""));

      if (chopped) {
        console.warn(
          "Warning: Person has more than two names. Additional names are not supported. The following is still left from the name:",
          chopped
        );
      }
    } else if (initialsRegex.test(hay)) {
      initials = hay;
      chopped = removeSpaces(chopped.replace(hay, ""));
    } else if (!first) {
      first = hay;
      chopped = removeSpaces(chopped.replace(hay, ""));
    } else if (!middle) {
      middle = hay;
      chopped = removeSpaces(chopped.replace(hay, ""));
    }
  });
  return [first, middle, initials, last, chopped];
};

const removeSpaces = (str: string) => str.trim().replace("  ", " ");
