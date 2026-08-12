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

import type {Lazy} from "./Lazy"

/**
 * A {@link Lazy} implementation with a value that will be initialized on the {@link value} retrieval
 *
 * @internal
 */
export class LazyImplementation<const out T, >
    implements Lazy<T> {

    readonly #initializer: () => T
    #isInitialized: boolean
    #value?: T

    public constructor(initializer: () => T,) {
        if (!(initializer instanceof Function)) {
            if (initializer == null)
                throw new TypeError(`The initializer received in the "LazyImplementation" cannot be null.`,)
            throw new TypeError(`The initializer received in the "LazyImplementation" should be a function type (type = ${typeof initializer} & constructor = ${(initializer as NonNullable<unknown>).constructor.name}).`,)
        }
        this.#initializer = initializer
        this.#isInitialized = false
    }

    public get isInitialized(): boolean {
        return this.#isInitialized
    }

    public get value(): T {
        if (this.isInitialized)
            return this.#value as T
        this.#value = this.#initializer()
        this.#isInitialized = true
        return this.#value
    }

    public toString(): string {
        if (this.isInitialized) {
            const value = this.#value as T
            if (value == null)
                return `${value}`
            return value.toString()
        }
        return "Lazy value not initialized yet."
    }

}
