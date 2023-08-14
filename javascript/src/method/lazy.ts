/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Lazy} from "../Lazy"

import {LazyImplementation} from "../LazyImplementation"

/**
 * Create a new {@link Lazy} from an {@link initializer}
 *
 * @param initializer The value held
 */
export function lazy<const T, >(initializer: () => T,): Lazy<T> {
    return new LazyImplementation(initializer,)
}
