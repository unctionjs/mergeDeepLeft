
import mergeDeepLeft from "./index.ts";

test(() => {
  expect(mergeDeepLeft({alpha: "1"})({beta: "2"})).toEqual({
    alpha: "1",
    beta: "2",
  });
});

test(() => {
  expect(mergeDeepLeft({gamma: {alpha: "1"}})({gamma: {beta: "2"}})).toEqual({
    gamma: {
      alpha: "1",
      beta: "2",
    },
  });
});

test(() => {
  expect(mergeDeepLeft({alpha: {alpha: "1"}})({beta: {beta: "2"}})).toEqual({
    alpha: {alpha: "1"},
    beta: {beta: "2"},
  });
});

test(() => {
  expect(mergeDeepLeft({alpha: {alpha: "1"}})({alpha: {alpha: "2"}})).toEqual({alpha: {alpha: "1"}});
});

test(() => {
  expect(mergeDeepLeft(["a"])(["b"])).toEqual([
    "a",
    "b",
  ]);
});

test(() => {
  expect(mergeDeepLeft(["a"])(["a"])).toEqual([
    "a",
    "a",
  ]);
});

test(() => {
  expect(mergeDeepLeft({alpha: ["a"]})({alpha: ["a"]})).toEqual({
    alpha: [
      "a",
      "a",
    ],
  });
});
