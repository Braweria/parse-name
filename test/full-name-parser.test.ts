import { parseName } from "../lib/full-name-parser";

test("parse full name", () => {
  expect(parseName("Frau Maria Höfer")).toEqual({
    prefix: "Frau",
    first: "Maria",
    middle: null,
    initials: null,
    infix: null,
    last: "Höfer",
    suffix: null,
    full: "Frau Maria Höfer",
  });
});

test("parse full name", () => {
  expect(parseName("Wiktoria Mielcarek")).toEqual({
    prefix: null,
    first: "Wiktoria",
    middle: null,
    initials: null,
    infix: null,
    last: "Mielcarek",
    suffix: null,
    full: "Wiktoria Mielcarek",
  });
});

test("parse full name", () => {
  expect(parseName("Dr. Raphael M. van der Börk")).toEqual({
    prefix: "Dr.",
    first: "Raphael",
    middle: null,
    initials: "M.",
    infix: "van der",
    last: "Börk",
    suffix: null,
    full: "Dr. Raphael M. van der Börk II",
  });
});

test("parse full name", () => {
  expect(parseName("Prof. Steph Alice von Wolfenstein, III")).toEqual({
    prefix: "Prof.",
    first: "Steph",
    middle: "Alice",
    initials: null,
    infix: "von",
    last: "Wolfenstein",
    suffix: "III",
    full: "Prof. Steph Alice von Wolfenstein",
  });
});

test("parse full name", () => {
  expect(
    parseName("Königin Elizabeth Alexandra Mary Mountbatten-Windsor")
  ).toEqual({
    prefix: "Königin",
    first: "Elizabeth",
    middle: "Alexandra",
    initials: null,
    infix: null,
    last: "Mountbatten-Windsor",
    suffix: null,
    full: "Königin Elizabeth Alexandra Mary Mountbatten-Windsor",
  });
});

test("parse full name", () => {
  expect(parseName("Jochen Profit")).toEqual({
    prefix: null,
    first: "Jochen",
    middle: null,
    initials: null,
    infix: null,
    last: "Profit",
    suffix: null,
    full: "Königin Elizabeth Alexandra Mary Mountbatten-Windsor",
  });
});
