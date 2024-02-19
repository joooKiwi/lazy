/*******************************************************************************
 Copyright (c) 2023-2024. Jonathan Bédard ~ JóôòKiwi

 This project is free to use.
 All the right is reserved to the author of this project.
 ******************************************************************************/

import {lazy}   from "./method/lazy"
import {lazyOf} from "./method/lazyOf"

/** The common {@link Lazy} that could be used */
export namespace CommonLazy {

    //#region -------------------- Lazy null --------------------

    /** A {@link Lazy} for <b>undefined</b> */
    export const UNDEFINED = lazyOf(undefined,)
    /** A {@link Lazy} for <b>null</b> */
    export const NULL = lazyOf(null,)

    //#endregion -------------------- Lazy null --------------------
    //#region -------------------- Lazy boolean --------------------

    /** A {@link Lazy} for <b>false</b> */
    export const FALSE = lazyOf(false,)
    /** A {@link Lazy} for <b>true</b> */
    export const TRUE = lazyOf(true,)

    //#endregion -------------------- Lazy boolean --------------------
    //#region -------------------- Lazy number --------------------

    /** A {@link Lazy} for <b>-1</b> */
    export const MINUS_1_NUMBER = lazyOf(-1,)
    /** A {@link Lazy} for <b>0</b> */
    export const ZERO_NUMBER = lazyOf(0,)
    /** A {@link Lazy} for <b>1</b> */
    export const ONE_NUMBER = lazyOf(1,)
    /** A {@link Lazy} for <b>2</b> */
    export const TWO_NUMBER = lazyOf(2,)

    /** A {@link Lazy} for {@link Number.NaN NaN} */
    export const NAN = lazyOf(Number.NaN,)
    /** A {@link Lazy} for {@link Number.POSITIVE_INFINITY +∞} */
    export const POSITIVE_INFINITY = lazyOf(Number.POSITIVE_INFINITY,)
    /** A {@link Lazy} for {@link Number.NEGATIVE_INFINITY -∞} */
    export const NEGATIVE_INFINITY = lazyOf(Number.NEGATIVE_INFINITY,)

    /** A {@link Lazy} for {@link Math.LN2 ln(2)} */
    export const LN_OF_2 = lazyOf(Math.LN2,)
    /** A {@link Lazy} for {@link Math.LN10 ln(10)} */
    export const LN_OF_10 = lazyOf(Math.LN10,)
    /** A {@link Lazy} for {@link Math.LOG2E log₂(E)} */
    export const LOG_2_OF_E = lazyOf(Math.LOG2E,)
    /** A {@link Lazy} for {@link Math.LOG10E log₁₀(E)} */
    export const LOG_10_OF_E = lazyOf(Math.LOG10E,)
    /** A {@link Lazy} for {@link Math.E E} */
    export const E = lazyOf(Math.E,)
    /** A {@link Lazy} for {@link Math.PI Pi🥧} */
    export const PI = lazyOf(Math.PI,)

    //#endregion -------------------- Lazy number --------------------
    //#region -------------------- Lazy bigint --------------------

    /** A {@link Lazy} for <b>-1</b> */
    export const MINUS_1_BIGINT = lazyOf(-1n,)
    /** A {@link Lazy} for <b>0</b> */
    export const ZERO_BIGINT = lazyOf(0n,)
    /** A {@link Lazy} for <b>1</b> */
    export const ONE_BIGINT = lazyOf(1n,)
    /** A {@link Lazy} for <b>2</b> */
    export const TWO_BIGINT = lazyOf(2n,)

    //#endregion -------------------- Lazy bigint --------------------
    //#region -------------------- Lazy character --------------------

    /** A {@link Lazy} for the space {@link String Character} */
    export const SPACE_CHARACTER = lazyOf(' ',)
    /** A {@link Lazy} for the tabulation {@link String Character} */
    export const TABULATION_CHARACTER = lazyOf('\t',)
    /** A {@link Lazy} for the enter {@link String Character} */
    export const ENTER_CHARACTER = lazyOf('\n',)

    //#region -------------------- Lazy number character --------------------

    /** A {@link Lazy} for <b>0</b> as a {@link String Character} */
    export const ZERO_CHARACTER = lazyOf('0',)
    /** A {@link Lazy} for <b>1</b> as a {@link String Character} */
    export const ONE_CHARACTER = lazyOf('1',)
    /** A {@link Lazy} for <b>2</b> as a {@link String Character} */
    export const TWO_CHARACTER = lazyOf('2',)

    //#endregion -------------------- Lazy number character --------------------

    //#endregion -------------------- Lazy character --------------------
    //#region -------------------- Lazy string --------------------

    //#region -------------------- Lazy null string --------------------

    /** A {@link Lazy} for <b>undefined</b> as a {@link String} */
    export const UNDEFINED_STRING = lazyOf("undefined",)
    /** A {@link Lazy} for <b>null</b> as a {@link String} */
    export const NULL_STRING = lazyOf("null",)

    //#endregion -------------------- Lazy null string --------------------
    //#region -------------------- Lazy boolean string --------------------

    /** A {@link Lazy} for <b>true</b> as a {@link String} */
    export const TRUE_STRING = lazyOf("true",)
    /** A {@link Lazy} for <b>false</b> as a {@link String} */
    export const FALSE_STRING = lazyOf("false",)

    //#endregion -------------------- Lazy boolean string --------------------
    //#region -------------------- Lazy number string --------------------

    /** A {@link Lazy} for <b>true</b> as a {@link String} */
    export const MINUS_1_STRING = lazyOf("-1",)
    /** A {@link Lazy} for <b>0</b> as a {@link String} */
    export const ZERO_STRING = CommonLazy.ZERO_CHARACTER
    /** A {@link Lazy} for <b>1</b> as a {@link String} */
    export const ONE_STRING = CommonLazy.ONE_CHARACTER
    /** A {@link Lazy} for <b>2</b> as a {@link String} */
    export const TWO_STRING = CommonLazy.TWO_CHARACTER

    /** A {@link Lazy} for {@link Number.NaN} as a {@link String} */
    export const NAN_STRING = lazyOf("NaN",)
    /** A {@link Lazy} for {@link Number.POSITIVE_INFINITY +∞} as a {@link String} */
    export const POSITIVE_INFINITY_STRING = lazyOf("Infinity",)
    /** A {@link Lazy} for {@link Number.NEGATIVE_INFINITY -∞} as a {@link String} */
    export const NEGATIVE_INFINITY_STRING = lazyOf("-Infinity",)

    //#endregion -------------------- Lazy number string --------------------
    //#region -------------------- Lazy date string --------------------

    /** A {@link Lazy} for an invalid {@link Date} {@link String} */
    export const INVALID_DATE_STRING = lazyOf("Invalid Date",)

    //#endregion -------------------- Lazy date string --------------------

    //#endregion -------------------- Lazy string --------------------
    //#region -------------------- Lazy date --------------------

    /**
     * A {@link Lazy} for the epoch {@link Date}.
     *
     * It is the equivalent to the day 0 in computer
     * or the January 1st 1970.
     *
     * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date Javascript Epoch date
     * @see https://docs.oracle.com/en/java/javase/20/docs/api/java.base/java/time/Instant.html#EPOCH Java Epoch date
     * @see https://learn.microsoft.com/dotnet/api/system.datetime.unixepoch C# Epoch date
     */
    export const EPOCH_DATE = lazy(() => Object.freeze(new Date(0,),),)

    /** A {@link Lazy} for today as a {@link Date} */
    export const NOW_DATE = lazyOf(Object.freeze(new Date(),),)
    /** A {@link Lazy} for tomorrow as a {@link Date} */
    export const TOMORROW_DATE = lazy(() => {
        const date = new Date(CommonLazy.NOW_DATE.value.getUTCDate(),)
        date.setUTCDate(date.getUTCDate() + 1,)
        return Object.freeze(date,)
    },)
    /** A {@link Lazy} for tomorrow as a {@link Date} */
    export const YESTERDAY_DATE = lazy(() => {
        const date = new Date(CommonLazy.NOW_DATE.value.getUTCDate(),)
        date.setUTCDate(date.getUTCDate() - 1,)
        return Object.freeze(date,)
    },)

    /** A {@link Lazy} for an invalid {@link Date} */
    export const INVALID_DATE = lazy(() => Object.freeze(new Date(CommonLazy.INVALID_DATE_STRING.value,),),)

    //#endregion -------------------- Lazy date --------------------
    //#region -------------------- Lazy empty objects --------------------

    /** A {@link Lazy} for an empty {@link String} */
    export const EMPTY_STRING = lazyOf('',)
    /** A {@link Lazy} for an empty {@link Object} */
    export const EMPTY_OBJECT = lazy(() => Object.freeze({},),)
    /** A {@link Lazy} for an empty {@link Array} */
    export const EMPTY_ARRAY = lazy(() => Object.freeze([],) as readonly [],)
    /** A {@link Lazy} for an empty {@link Set} */
    export const EMPTY_SET = lazy(() => Object.freeze(new Set<never>(),) as ReadonlySet<never>,)
    /** A {@link Lazy} for an empty {@link WeakSet} */
    export const EMPTY_WEAK_SET = lazy(() => Object.freeze(new WeakSet<never>(),),)
    /** A {@link Lazy} for an empty {@link Map} */
    export const EMPTY_MAP = lazy(() => Object.freeze(new Map<unknown, never>(),) as ReadonlyMap<unknown, never>,)
    /** A {@link Lazy} for an empty {@link WeakMap} */
    export const EMPTY_WEAK_MAP = lazy(() => Object.freeze(new WeakMap<object, never>(),),)

    //#endregion -------------------- Lazy empty objects --------------------

}
