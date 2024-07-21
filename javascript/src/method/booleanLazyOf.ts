/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import type {Lazy} from "../Lazy"

import {CommonLazy} from "../CommonLazy"

/**
 * Retrieve either {@link CommonLazy.TRUE} or {@link CommonLazy.FALSE} based on the {@link value}
 * provided as a {@link Boolean}
 *
 * @param value The {@link Boolean} value directly
 * @see lazyOf
 */
export function booleanLazyOf<const T extends boolean, >(value: T,): Lazy<T>
export function booleanLazyOf(value: boolean,): Lazy<boolean> {
    if (value)
        return CommonLazy.TRUE
    return CommonLazy.FALSE
}
