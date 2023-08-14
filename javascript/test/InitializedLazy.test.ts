/*******************************************************************************
 Copyright (c) 2023. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import {InitializedLazy} from "../src/InitializedLazy"
import {everyConstant}   from "./constants"

describe("InitializedLazyTest", () => {
    describe.each(everyConstant,)("%s", ({value: it,},) => {
        test("value", () => expect(new InitializedLazy(it,).value,).toBe(it,),)
        describe("is initialized ", () => {
            test("before get", () => expect(new InitializedLazy(() => it,).isInitialized,).toBeTrue(),)
            test("after get", () => {
                const lazy = new InitializedLazy(() => it,)
                lazy.value
                expect(lazy.isInitialized,).toBeTrue()
            },)
        },)
        describe("toString does not throw", () => {
            test("before get", () => expect(() => new InitializedLazy(it,).toString(),).not.toThrow(),)
            test("after get", () => {
                const lazy = new InitializedLazy(it,)
                lazy.value
                expect(() => lazy.toString(),).not.toThrow()
            },)
        })
    },)
},)