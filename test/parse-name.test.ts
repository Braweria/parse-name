import { parseName } from "../lib/parse-name";

test("parse prefix only", () => {
  expect(parseName("Frau Maria Höfer")).toEqual({
    prefix: "Frau",
    first: null,
    initials: null,
    infix: null,
    last: null,
    suffix: null,
    full: "Frau Maria Höfer",
  });
});

// Frau Maria Höfer
