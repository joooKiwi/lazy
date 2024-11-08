# Lazy (javascript version)

## Table of content
* [Installation](#installation)
* [Usage](#usage)
  * [Lazy value](#lazy-value)
  * [Non-lazy value](#non-lazy-value)
  * [Specialized non-lazy value](#specialized-non-lazy-value)
  * [Common lazy](#common-lazy)
* [Contribution](#contribution)

This project is an implementation based on the [Kotlin Lazy](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-lazy/).
All of this with additional features to help the reusing of some values.

## Installation
```
npm install @joookiwi/lazy
npm i @joookiwi/lazy

npm install --save @joookiwi/lazy
npm i -S @joookiwi/lazy

npm install --save-dev @joookiwi/lazy
npm i -D @joookiwi/lazy
```

## Usage
The usage is similar to the kotlin usage like `val value by lazy { someValue }` in kotlin
as well as the non-lazy implementation like `val value = lazyOf(someValue)`.

But since there is no significant dependency toward this specifically.
Here is an implementation of the lazy via 2 functions
 - `lazy` to load the value later
 - `lazyOf` to have a `Lazy` but with an already loaded value

### Lazy value

Using the lazy value will always return a `Lazy` object holding a value.

```javascript
import {lazy} from "@joookiwi/lazy"

const firstValue = lazy(() => 2)
firstValue.isInitialized // false
firstValue.value         // 2
firstValue.isInitialized // true
```

### Non-lazy value

If the value is already known, then just use `lazyOf()` in order to have a `Lazy` with an already loaded value.

```javascript
import {lazyOf} from "@joookiwi/lazy"

const firstValue = lazyOf(2)
firstValue.isInitialized // true
firstValue.value         // 2
firstValue.isInitialized // true
```

### Specialized non-lazy value

There are some specialized `lazyOf()`-like `Lazy` to reuse the `CommonLazy` values depending on what it has received:
 - `booleanLazyOf` for the `boolean`
 - `numberLazyOf` for the `number`
 - `bigintLazyOf` for the `bigint`
 - `dateLazyOf` for the `Date`

### Common lazy

When using the lazy methods,
it always creates a new instance.

But, there could be some cases where an already known value is there.

Here is the full list of the common `Lazy` instances:

| Value                                               | With string | With character | With BigInt |
|-----------------------------------------------------|:------------|:---------------|:------------|
| `null`                                              | yes         |                |             |
| `undefined`                                         | yes         |                |             |
| `true` / `false`                                    | yes         |                |             |
| `-1` / `0` / `1` / `2`                              | yes         | yes            | yes         |
| `NaN` / `∞` (infinity) / `-∞` _(-infinity)_         | yes         |                |             |
| `ln(2)` / `ln(10)`                                  |             |                |             |
| `log₂(E)` / `log₁₀(E)`                              |             |                |             |
| `E`, `π` _(pi)_, `τ` _(tau)_                        |             |                |             |
| ` ` / `\t` / `\n`                                   |             | yes            |             |
| epoch date                                          |             |                |             |
| invalid date                                        | yes         |                |             |
| empty String → `''`                                 |             |                |             |
| empty object → `Readonly<{}>`                       |             |                |             |
| empty Array → `readonly []`                         |             |                |             |
| empty Set → `ReadonlySet<never>`                    |             |                |             |
| empty WeakSet → `Readonly<WeakSet<WeakKey>>`        |             |                |             |
| empty Map → `ReadonlyMap<unknown, never>`           |             |                |             |
| empty WeakMap → `Readonly<WeakMap<WeakKey, never>>` |             |                |             |

## Contribution
You can contribute to great simple packages.
All with similar behaviour across different languages (like Java, Kotlin, C# and PHP).
It can be done 2 different ways:
- [GitHub sponsor](https://github.com/sponsors/joooKiwi) or
- [!["Buy me a Coffee"](https://img.buymeacoffee.com/button-api/?&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00)](https://www.buymeacoffee.com/joookiwi)
