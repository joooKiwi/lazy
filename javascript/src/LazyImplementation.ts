/*******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi
 *
 * This project is free to use.
 * All the right is reserved to the author of this project.
 ******************************************************************************/

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
                throw new TypeError(`The initializer received in the "${LazyImplementation.constructor.name}" cannot be null.`,)
            throw new TypeError(`The initializer received in the "${LazyImplementation.constructor.name}" should be a function type (type = ${typeof initializer} & constructor = ${(initializer as NonNullable<unknown>).constructor.name}).`,)
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
            return value == null ? `${value}` : value.toString()
        }
        return "Lazy value not initialized yet."
    }

}
