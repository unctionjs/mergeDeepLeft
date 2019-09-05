import mergeLeft from "@unction/mergeleft";
import mergeWith from "@unction/mergewith";
import isObject from "@unction/isobject";
import isArray from "@unction/isarray";
import {EnumerableType} from "./types";

export default function mergeDeepLeft<A> (left: EnumerableType<A>) {
  return function mergeDeepLeftLeft (right: EnumerableType<A>): EnumerableType<A> {
    if (isArray(left) && isArray(right)) {
      return mergeLeft(right)(left);
    }

    if (isObject(left) && isObject(right)) {
      return mergeWith(mergeDeepLeft)(left)(right);
    }

    return left;
  };
}
