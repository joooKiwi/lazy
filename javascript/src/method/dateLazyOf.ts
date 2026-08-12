//··························································
// Copyright (c) 2023-2026. Jonathan Bédard ~ JóôòKiwi
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
 * Retrieve a value that is a {@link Date} from the {@link CommonLazy} (if it exists)
 * or create a new {@link Lazy} from an already initialized {@link value}
 *
 * @param value The {@link Date} value directly
 * @see lazyOf
 */
export function dateLazyOf<const T extends Date, >(value: T,): Lazy<T>
export function dateLazyOf(value: Date,): Lazy<Date> {
    const time = value.getTime()
    if (Number.isNaN(time,))
        return CommonLazy.INVALID_DATE
    if (time === 0)
        return CommonLazy.EPOCH_DATE
    return new InitializedLazy(value,)
}
