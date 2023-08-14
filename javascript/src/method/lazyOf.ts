/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Lazy} from "../Lazy"

import {InitializedLazy} from "../InitializedLazy"

/**
 * Create a new {@link Lazy} already initialized with the specified {@link value}
 *
 * @param value The value directly
 */
export function lazyOf<const T, >(value: T,): Lazy<T> {
    return new InitializedLazy(value,)
}
