# Lazy

This project has the purpose to expand on the lazy pattern on giving ways
to have a "lazy-like" holder
or "true-lazy" holder in the same structure.

It has its origin in `Kotlin` & `C#`,
but expand on their use to include the nullable type as a valid type.

It will try to include its behaviour across different languages
(`Javascript`, `Java`, `Kotlin`, `PHP`, `C#` and possibly more)

## Publication location

This project only has the Javascript (with Typescript) uploaded.

But other languages will be eventually added

| Language                  |                                                                                           Published                                                                                            |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Javascript<br/>Typescript | [Published to npm](https://www.npmjs.com/package/@joookiwi/lazy)<br/>[![downloads](https://img.shields.io/npm/dt/@joookiwi/lazy.svg)](https://npm-stat.com/charts.html?package=@joookiwi/lazy) |
| Java                      |                                                                                             Maven                                                                                              |
| Kotlin                    |                      [Integrated in the language](https://kotlinlang.org/docs/delegated-properties.html#observable-properties)<br/>_(but common values are to be added)_                       |
| PHP                       |                                                                                            Composer                                                                                            |
| C#                        |                                                                                             Nuget                                                                                              |

## Related projects

Here is a list of the related projects made by me
 - type ([GitHub](https://github.com/joooKiwi/type) | [NPM](https://www.npmjs.com/package/@joookiwi/type))
 - collection ([GitHub](https://github.com/joooKiwi/collection) | [NPM](https://www.npmjs.com/package/@joookiwi/collection))
 - enumeration ([GitHub](https://github.com/joooKiwi/enumeration) | [NPM](https://www.npmjs.com/package/@joookiwi/enumerable))

## Contribution

You can contribute to my projects in 2 different ways
- [GitHub sponsor](https://github.com/sponsors/joooKiwi) or
- [!["Buy me a Coffee"](https://img.buymeacoffee.com/button-api/?&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00)](https://www.buymeacoffee.com/joookiwi)

## Version history

| JS/TS                                                            | Date                 | Quick note                                                                                |
|------------------------------------------------------------------|----------------------|-------------------------------------------------------------------------------------------|
| [1.5.0](https://github.com/joooKiwi/lazy/releases/tag/v1.5.0-js) | July 21st, 2024      | Addition of `lazyOf` for the predefined `boolean`, `bigint` & `number`                    |
| 1.4.0                                                            | March 31st, 2024     | Addition of [type](https://github.com/joooKiwi/type) to the dependency                    |
| [1.3.0](https://github.com/joooKiwi/lazy/releases/tag/v1.3.0-js) | February 19th, 2024  | Standardization of the ~~BIG_INT~~ / BIGINT to only be BIGINT                             |
| 1.2.1                                                            | December 4th, 2023   | A small update of the dependencies                                                        |
| [1.2.0](https://github.com/joooKiwi/lazy/releases/tag/v1.2.0-js) | September 28th, 2023 | Addition of lazy "bigint" numbers<br/>Fix on the empty array to be `readonly []`          |
| [1.1.1](https://github.com/joooKiwi/lazy/releases/tag/v1.1.1-js) | August 14th, 2023    | Relocation of the `lazy` & `lazyOf` methods in their own standalone file                  |
| [1.1.0](https://github.com/joooKiwi/lazy/releases/tag/v1.1.0-js) | August 14th, 2023    | New [CommonLazy](https://github.com/joooKiwi/lazy/blob/main/javascript/src/CommonLazy.ts) |
| 1.0.1                                                            | July 1st, 2023       | A small update of the dependencies                                                        |
| 1.0.0                                                            | June 28th, 2023      | The first implementation used in Javascript                                               |
