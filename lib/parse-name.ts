import { prefixes, infixes, suffixes } from "./helpers";

export function parseName(fullname: string): Person {
  const original = fullname;
  let prefix, first, initials, middle, infix, last, suffix;

  let chopped = fullname;
  [prefix, chopped] = findNeedleInHaystack(prefixes, chopped);
  [infix, chopped] = findNeedleInHaystack(infixes, chopped);
  [suffix, chopped] = findNeedleInHaystack(suffixes, chopped);
  [first, chopped] = findName("first", chopped);
  // [middle, chopped] = findName("middle", chopped);
  // [initials, chopped] = findName("initials", chopped, first, middle);
  // [last, chopped] = findName("last", chopped);

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

  // console.log(parsedName);
  return parsedName;
}

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
) => {
  const sortedNeedles = needles.sort(sorting);

  let found = false;
  let i = 0;
  let result = "";
  let chopped = haystack;

  while (found === false) {
    if (i > sortedNeedles.length - 1) {
      result = null;
      found = true;
      break;
    }

    for (let a = 0; a < haystack.length; a++) {
      if (
        haystack.substr(a, sortedNeedles[i].length).toLowerCase() ===
        sortedNeedles[i]
      ) {
        result = haystack.substr(a, sortedNeedles[i].length);
        found = true;
        chopped = removeSpaces(haystack.replace(result, ""));
        break;
      }
    }
    i++;
  }

  return [result, chopped];
};

const findName = (
  type: string,
  haystack: string,
  firstName?: string,
  middleName?: string
) => {
  let result = null;
  let chopped = haystack;
  const firstInital = firstName ? firstName.substr(0, 1) : "";
  const middleInital = middleName ? middleName.substr(0, 1) : "";
  const initialsRegex = /(\S\.\s{0,1})+/u;

  // if (type === "first") {
  //   [result] = haystack.split(" ");
  //   chopped = removeSpaces(haystack.replace(result, ""));
  // }
  // if (type === "initials") {
  //   const initialsRegex = /(\S\.\s{0,1})+/u;
  //   const matches = haystack.match(initialsRegex);
  //   if (matches) {
  //     result = removeSpaces(matches[0]);
  //     chopped = removeSpaces(haystack.replace(result, ""));
  //   }
  //   console.log(result);
  // }
  // if (type === "middle") {
  //   //
  // }
  // if (type === "last") {
  //   //
  // }

  let initials = "";
  let first = "";
  let middle = "";
  let last = "";

  haystack.split(" ").forEach((hay, i, all) => {
    const len = all.length - 1;
    if (i === len) {
      last = hay;
    }
    console.log(hay.match(initialsRegex));
  });

  return [result, chopped];
};

const removeSpaces = (str: string) => str.trim().replace("  ", " ");

parseName("Frau Maria Höfer");
parseName("Mr. Raphael A. van der Börk, II");
parseName("Steph van der Börk");
parseName("Steph Alice van der Börk snr");
parseName("Prof. Eric C. B. Meyer");
parseName("Z. Rüdiger Müller");
