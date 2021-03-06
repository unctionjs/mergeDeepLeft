import mergeLeft from "@unction/mergeleft";
import mergeWith from "@unction/mergewith";
import isObject from "@unction/isobject";
import isArray from "@unction/isarray";

export default function mergeDeepLeft<A> (left: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string) {
  return function mergeDeepLeftLeft (right: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string {
    if (isArray(left) && isArray(right)) {
      return mergeLeft(right)(left);
    }

    if (isObject(left) && isObject(right)) {
      return mergeWith(mergeDeepLeft)(left)(right);
    }

    return left;
  };
}
