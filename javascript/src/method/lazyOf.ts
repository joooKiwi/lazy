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

import {InitializedLazy} from "../InitializedLazy"

/**
 * Create a new {@link Lazy} already initialized with the specified {@link value}
 *
 * @param value The value directly
 * @see booleanLazyOf
 * @see numberLazyOf
 * @see bigIntLazyOf
 */
export function lazyOf<const T, >(value: T,): Lazy<T> {
    return new InitializedLazy(value,)
}
