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

import {Holder} from "./Holder"

export const everyConstant = [
        new Holder(undefined, "undefined", "cannot be null",),
        new Holder(null, "null", "cannot be null",),
        new Holder('', "string", "type = string & constructor = String",),
        new Holder(0, "number", "type = number & constructor = Number",),
        new Holder(0n, "bigint", "type = bigint & constructor = BigInt",),
        new Holder(true, "boolean", "type = boolean & constructor = Boolean",),
        new Holder(Symbol(), "symbol", "type = symbol & constructor = Symbol",),
        new Holder([], "array", "type = object & constructor = Array",),
        new Holder(new Set(), "set", "type = object & constructor = Set",),
        new Holder(new Map(), "map", "type = object & constructor = Map",),
    ] as const
