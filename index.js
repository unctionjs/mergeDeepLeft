import mergeLeft from "@unction/mergeleft"
import mergeWith from "@unction/mergewith"
import isObject from "@unction/isobject"
import isArray from "@unction/isarray"

export default function mergeDeepLeft (left: FunctorType): Function {
  return function mergeDeepLeftLeft (right: FunctorType): FunctorType {
    if (isArray(left) && isArray(right)) {
      return mergeLeft(right)(left)
    }

    if (isObject(left) && isObject(right)) {
      return mergeWith(mergeDeepLeft)(left)(right)
    }

    return left
  }
}
