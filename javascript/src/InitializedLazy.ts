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

import type {Lazy} from "./Lazy"

/**
 * A {@link Lazy} instance with an already initialized value
 *
 * @internal
 */
export class InitializedLazy<const out T, >
    implements Lazy<T> {

    readonly #value

    public constructor(value: T,) {
        this.#value = value
    }

    public get isInitialized(): true {
        return true
    }

    public get value(): T {
        return this.#value
    }

    public toString(): string {
        const value = this.value
        if (value == null)
            return `${value}`
        return value.toString()
    }

}
