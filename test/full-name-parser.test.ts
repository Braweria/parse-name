// @ts-nocheck
import { parseName } from "../lib/full-name-parser";

test("parse Frau Maria Höfer", () => {
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

test("parse Wiktoria Mielcarek", () => {
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

test("parse Dr. Raphael M. van der Börk", () => {
  expect(parseName("Dr. Raphael M. van der Börk")).toEqual({
    prefix: "Dr.",
    first: "Raphael",
    middle: null,
    initials: "M.",
    infix: "van der",
    last: "Börk",
    suffix: null,
    full: "Dr. Raphael M. van der Börk",
  });
});

test("parse Prof. Steph Alice von Wolfenstein, III", () => {
  expect(parseName("Prof. Steph Alice von Wolfenstein, III")).toEqual({
    prefix: "Prof.",
    first: "Steph",
    middle: "Alice",
    initials: null,
    infix: "von",
    last: "Wolfenstein",
    suffix: "III",
    full: "Prof. Steph Alice von Wolfenstein, III",
  });
});

test("parse Königin Elizabeth Alexandra Mary Mountbatten-Windsor", () => {
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

test("parse Jochen Profit", () => {
  expect(parseName("Jochen Profit")).toEqual({
    prefix: null,
    first: "Jochen",
    middle: null,
    initials: null,
    infix: null,
    last: "Profit",
    suffix: null,
    full: "Jochen Profit",
  });
});

test("should return object with every value being null when passing an empty string", () => {
  expect(parseName("")).toEqual({
    prefix: null,
    first: null,
    middle: null,
    initials: null,
    infix: null,
    last: null,
    suffix: null,
    full: "",
  });
});

test("should throw error when passing numbers", () => {
  expect(() => parseName(1234)).toThrow("fullname must be a string");
});

test("should throw error when passing nothing", () => {
  expect(() => parseName()).toThrow("fullname must be a string");
});

test("should throw error when passing array", () => {
  expect(() => parseName(["Steph Meyer", "Jochen Profit"])).toThrow(
    "fullname must be a string"
  );
});

test("should throw error when passing object", () => {
  expect(() =>
    parseName({ name1: "Steph Meyer", name2: "Jochen Profit" })
  ).toThrow("fullname must be a string");
});

test("should ignore second and beyond arguments", () => {
  expect(parseName("Steph Meyer", "Jochen Profit")).toEqual({
    prefix: null,
    first: "Steph",
    middle: null,
    initials: null,
    infix: null,
    last: "Meyer",
    suffix: null,
    full: "Steph Meyer",
  });
});
