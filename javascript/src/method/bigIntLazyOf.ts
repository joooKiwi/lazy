/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Lazy} from "../Lazy"

import {CommonLazy}      from "../CommonLazy"
import {InitializedLazy} from "../InitializedLazy"

/**
 * Retrieve a value that is a {@link BigInt} from the {@link CommonLazy} (if it exists)
 * or create a new {@link Lazy} from an already initialized {@link value}
 *
 * @param value The {@link BigInt} value directly
 * @see lazyOf
 * @see numberLazyOf
 */
export function bigIntLazyOf<const T extends bigint, >(value: T,): Lazy<T>
export function bigIntLazyOf(value: bigint,): Lazy<bigint> {
    if (value === -1n)
        return CommonLazy.MINUS_1_BIGINT
    if (value === 0n)
        return CommonLazy.ZERO_BIGINT
    if (value === 1n)
        return CommonLazy.ONE_BIGINT
    if (value === 2n)
        return CommonLazy.TWO_BIGINT
    return new InitializedLazy(value,)
}
