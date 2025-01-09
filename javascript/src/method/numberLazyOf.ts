//··························································
// Copyright (c) 2023-2025. Jonathan Bédard ~ JóôòKiwi
//
// This project is free to use.
// All the right is reserved to the author of this project.
// My projects:
//  - https://github.com/joooKiwi/type
//  - https://github.com/joooKiwi/lazy
//  - https://github.com/joooKiwi/collection
//  - https://github.com/joooKiwi/enumeration
//··························································

import type {Lazy} from "../Lazy"

import {CommonLazy}      from "../CommonLazy"
import {InitializedLazy} from "../InitializedLazy"

/**
 * Retrieve a value that is a {@link Number} from the {@link CommonLazy} (if it exists)
 * or create a new {@link Lazy} from an already initialized {@link value}
 *
 * @param value The {@link Number} value directly
 * @see lazyOf
 * @see bigIntLazyOf
 */
export function numberLazyOf<const T extends number, >(value: T,): Lazy<T>
export function numberLazyOf(value: number,): Lazy<number> {
    if (Number.isNaN(value,))
        return CommonLazy.NAN
    if (value === Number.POSITIVE_INFINITY)
        return CommonLazy.POSITIVE_INFINITY
    if (value === Number.NEGATIVE_INFINITY)
        return CommonLazy.NEGATIVE_INFINITY

    if (value % 1 === 0) {
        if (value === -1)
            return CommonLazy.MINUS_1_NUMBER
        if (value === 0)
            return CommonLazy.ZERO_NUMBER
        if (value === 1)
            return CommonLazy.ONE_NUMBER
        if (value === 2)
            return CommonLazy.TWO_NUMBER
        return new InitializedLazy(value,)
    }

    if (value === Math.E)
        return CommonLazy.E
    if (value === Math.PI)
        return CommonLazy.PI
    if (value === Math.SQRT2)
        return CommonLazy.SQUARE_ROOT_OF_2
    if (value === Math.SQRT1_2)
        return CommonLazy.SQUARE_ROOT_OF_1_OUT_OF_2
    if (value === Math.LN2)
        return CommonLazy.LN_OF_2
    if (value === Math.LN10)
        return CommonLazy.LN_OF_10
    if (value === Math.LOG2E)
        return CommonLazy.LOG_2_OF_E
    if (value === Math.LOG10E)
        return CommonLazy.LOG_10_OF_E

    if (value === Math.PI * 2)
        return CommonLazy.TAU
    return new InitializedLazy(value,)
}
