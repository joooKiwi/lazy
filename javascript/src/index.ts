/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Lazy} from "./Lazy"

import {InitializedLazy}    from "./InitializedLazy"
import {LazyImplementation} from "./LazyImplementation"

export type {Lazy} from "./Lazy"

/**
 * Create a new {@link Lazy} already initialized with the specified {@link value}
 *
 * @param value The value directly
 */
export function lazyOf<const T, >(value: T,): Lazy<T> {
    return new InitializedLazy(value,)
}

/**
 * Create a new {@link Lazy} from an {@link initializer}
 *
 * @param initializer The value held
 */
export function lazy<const T, >(initializer: () => T,): Lazy<T> {
    return new LazyImplementation(initializer,)
}
