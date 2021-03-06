import { evaluateParsedSymbol, parseChordFromSymbol } from "./parseFromSymbol";
import type { chord, ParseResult } from "./parser";
import { parse } from "./parser";

// Helper functions
function zip<X, Y>(xs: X[], ys: Y[]) {
  const result = [];
  for (let i = 0; i < Math.max(xs!.length, ys!.length); i++) {
    result.push((xs[i], ys[i]));
  }
  return result;
}

/** Given a list of string lists, return a list of every possible combination of their concatenation (concatenation ordered by the order of the lists).
 * i.e. given [["a", "b"], ["1", "2"], ["p", "q"]]
 *       get ["a1p", "a1q", "a2p", "a2q", "b1p", "b1q", "b2p", "b2q"] */
function build(_xxs: string[][]): string[] {
  if (_xxs.length <= 0) return [];
  let result = _xxs[0];
  const xxs = _xxs!.slice(1);
  xxs.forEach((ys) => {
    result = result.flatMap((x) => ys.map((y) => x + y));
  });
  return result;
}

// Constants to exhaustively generate every possible chord
const TONES = ["C", "D", "E", "F", "G", "A", "B"];
const TONE_MODIFIERS = ["", "#", "b"];
const ROOTS = build([TONES, TONE_MODIFIERS]);
const QUALITIES = [
  "",
  "maj",
  "M",
  "min",
  "m",
  "o",
  "dim",
  "+",
  "aug",
  "5",
  "sus2",
  "sus4",
  // "m7b5",
  // "ø",
];

const allPossibleChordSymbols = build([ROOTS, QUALITIES]);
// console.log(allPossibleChordSymbols);

test("should parse all possible chord symbols", () => {
  expect(
    allPossibleChordSymbols
      .map((input) => parse(input))
      .filter((result) => !result.ast).length
  ).toEqual(0);
});

// Test evaluate function
const manualTests = [
  "C",
  "C#",
  "Cbaug",
  "Cbm",
  "C5",
  "Csus2",
  "Csus4",
  "Cm7b5",
];
const evaluatedChords = manualTests
  .map(parse)
  .filter((r) => r.ast != null)
  .map((r) => evaluateParsedSymbol(<chord>r.ast))
  .forEach((c) => console.log(c, c.name, c.intervals));

console.log(parseChordFromSymbol(""));
// To compile grammar and run tests
// tspeg grammar.peg parser.ts && tsc grammar_test.ts | node grammar_test.js && rm *.js
