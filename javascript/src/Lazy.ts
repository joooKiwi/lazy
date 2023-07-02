/*******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi
 *
 * This project is free to use.
 * All the right is reserved to the author of this project.
 ******************************************************************************/

/**
 * Represent a value with a possibly lazy value
 *
 * @see https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-lazy/ Kotlin lazy
 */
export interface Lazy<out T, > {

    /** Tell if the {@link value} has been initialized */
    get isInitialized(): boolean

    /** The value held by the {@link Lazy} instance */
    get value(): T

}
