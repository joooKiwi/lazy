/*******************************************************************************
 * Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi
 *
 * This project is free to use.
 * All the right is reserved to the author of this project.
 ******************************************************************************/

import {LazyImplementation} from "../src/LazyImplementation"
import {everyConstant}      from "./constants"

describe("LazyImplementationTest", () => {
    describe("unexpected types", () => {
        test.each(everyConstant,)("%s", ({value: it,},) =>
            // @ts-expect-error
            expect(() => new LazyImplementation(it,),).toThrow(TypeError,),)

        describe("error messages", () => test.each(everyConstant,)("%s", ({value: it, expectedThrowMessage,},) =>
            // @ts-expect-error
            expect(() => new LazyImplementation(it,),).toThrow(expectedThrowMessage,),),)
    },)
    describe("valid type", () => describe.each(everyConstant,)("%s", () => {
        test("value", () => expect(new LazyImplementation(() => it,).value,).toBe(it,),)
        describe("is initialized ", () => {
            test("before get", () => expect(new LazyImplementation(() => it,).isInitialized,).toBeFalse(),)
            test("after get", () => {
                const lazy = new LazyImplementation(() => it,)
                lazy.value
                expect(lazy.isInitialized,).toBeTrue()
            },)
        },)
        describe("toString does not throw", () => {
            test("before get", () => expect(() => new LazyImplementation(() => it,).toString(),).not.toThrow(),)
            test("after get", () => {
                const lazy = new LazyImplementation(() => it,)
                lazy.value
                expect(() => lazy.toString(),).not.toThrow()
            },)
        })
    },),)
},)
