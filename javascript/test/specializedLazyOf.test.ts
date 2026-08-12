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

import {CommonLazy}    from "../src/CommonLazy"
import {bigIntLazyOf}  from "../src/method/bigIntLazyOf"
import {booleanLazyOf} from "../src/method/booleanLazyOf"
import {dateLazyOf}    from "../src/method/dateLazyOf"
import {numberLazyOf}  from "../src/method/numberLazyOf"

describe("Specialized lazyOf tests", () => {

    describe("boolean", () => {
        test("true",  () => expect(booleanLazyOf(true,),).toStrictEqual(CommonLazy.TRUE,),)
        test("false", () => expect(booleanLazyOf(false,),).toStrictEqual(CommonLazy.FALSE,),)
    },)
    describe("number", () => {
        test("NaN",   () => expect(numberLazyOf(NaN,),).toStrictEqual(CommonLazy.NAN,),)
        test("-∞",    () => expect(numberLazyOf(-Infinity,),).toStrictEqual(CommonLazy.NEGATIVE_INFINITY,),)
        test("+∞",    () => expect(numberLazyOf(Infinity,),).toStrictEqual(CommonLazy.POSITIVE_INFINITY,),)
        test("-2",    () => expect(numberLazyOf(-2,) === numberLazyOf(-2,),).toBeFalse(),)
        test("-1",    () => expect(numberLazyOf(-1,),).toStrictEqual(CommonLazy.MINUS_1_NUMBER,),)
        test('0',     () => expect(numberLazyOf(0,),).toStrictEqual(CommonLazy.ZERO_NUMBER,),)
        test('1',     () => expect(numberLazyOf(1,),).toStrictEqual(CommonLazy.ONE_NUMBER,),)
        test("1.1",   () => expect(numberLazyOf(1.1,) === numberLazyOf(1.1,),).toBeFalse(),)
        test('2',     () => expect(numberLazyOf(2,),).toStrictEqual(CommonLazy.TWO_NUMBER,),)
        test('3',     () => expect(numberLazyOf(3,) === numberLazyOf(3,),).toBeFalse(),)
        test('E',     () => expect(numberLazyOf(Math.E,),).toStrictEqual(CommonLazy.E,),)
        test('π',     () => expect(numberLazyOf(Math.PI,),).toStrictEqual(CommonLazy.PI,),)
        test('τ',     () => expect(numberLazyOf(Math.PI * 2,),).toStrictEqual(CommonLazy.TAU,),)
        describe("√2", () => {
            test("value",      () => expect(numberLazyOf(Math.SQRT2,),).toStrictEqual(CommonLazy.SQUARE_ROOT_OF_2,),)
            test("calculated", () => expect(numberLazyOf(Math.sqrt(2,),),).toStrictEqual(CommonLazy.SQUARE_ROOT_OF_2,),)
        },)
        describe("√½", () => {
            test("value",      () => expect(numberLazyOf(Math.SQRT1_2,),).toStrictEqual(CommonLazy.SQUARE_ROOT_OF_1_OUT_OF_2,),)
            test("calculated", () => expect(numberLazyOf(Math.sqrt(1 / 2,),),).toStrictEqual(CommonLazy.SQUARE_ROOT_OF_1_OUT_OF_2,),)
        },)
        describe("ln(2)", () => {
            test("value",      () => expect(numberLazyOf(Math.LN2,),).toStrictEqual(CommonLazy.LN_OF_2,),)
            test("calculated", () => expect(numberLazyOf(Math.log(2,),),).toStrictEqual(CommonLazy.LN_OF_2,),)
        },)
        describe("ln(10)", () => {
            test("value",      () => expect(numberLazyOf(Math.LN10,),).toStrictEqual(CommonLazy.LN_OF_10,),)
            test("calculated", () => expect(numberLazyOf(Math.log(10,),),).toStrictEqual(CommonLazy.LN_OF_10,),)
        },)
        describe("log₂(E)", () => {
            test("value",      () => expect(numberLazyOf(Math.LOG2E,),).toStrictEqual(CommonLazy.LOG_2_OF_E,),)
            test("calculated", () => expect(numberLazyOf(Math.log2(Math.E,),),).toStrictEqual(CommonLazy.LOG_2_OF_E,),)
        },)
        describe("log₁₀(E)", () => {
            test("value",      () => expect(numberLazyOf(Math.LOG10E,),).toStrictEqual(CommonLazy.LOG_10_OF_E,),)
            test("calculated", () => expect(numberLazyOf(Math.log10(Math.E,),),).toStrictEqual(CommonLazy.LOG_10_OF_E,),)
        },)
    },)
    describe("bigint", () => {
        test("-2", () => expect(bigIntLazyOf(-2n,) === bigIntLazyOf(-2n,),).toBeFalse(),)
        test("-1", () => expect(bigIntLazyOf(-1n,),).toStrictEqual(CommonLazy.MINUS_1_BIGINT,),)
        test('0',  () => expect(bigIntLazyOf(0n,),).toStrictEqual(CommonLazy.ZERO_BIGINT,),)
        test('1',  () => expect(bigIntLazyOf(1n,),).toStrictEqual(CommonLazy.ONE_BIGINT,),)
        test('2',  () => expect(bigIntLazyOf(2n,),).toStrictEqual(CommonLazy.TWO_BIGINT,),)
        test('3',  () => expect(bigIntLazyOf(3n,) === bigIntLazyOf(3n,),).toBeFalse(),)
    },)
    describe("date", () => {
        test("invalid", () => expect(dateLazyOf(new Date("",),),).toStrictEqual(CommonLazy.INVALID_DATE,),)
        test("epoch",   () => expect(dateLazyOf(new Date(0,),),).toStrictEqual(CommonLazy.EPOCH_DATE,),)
    },)

},)
