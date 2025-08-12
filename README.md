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

| Language                  |                                               Published                                               |
|:--------------------------|:-----------------------------------------------------------------------------------------------------:|
| Javascript<br/>Typescript | [![version][npm-image-link]][npm-link]<br/>[![downloads][npm-download-image-link]][npm-download-link] |
| Java                      |                                                 Maven                                                 |
| Kotlin                    |          [Integrated in the language][kotlin-lazy]<br/>_(but common values are to be added)_          |
| PHP                       |                                               Composer                                                |
| C#                        |                                                 Nuget                                                 |

[npm-image-link]:          https://img.shields.io/npm/v/@joookiwi/lazy.svg?logo=npm&label=
[npm-link]:                https://npmjs.org/package/@joookiwi/lazy
[npm-download-image-link]: https://img.shields.io/npm/dt/@joookiwi/lazy.svg
[npm-download-link]:       https://npm-stat.com/charts.html?package=@joookiwi/lazy
[kotlin-lazy]:             https://kotlinlang.org/docs/delegated-properties.html#observable-properties

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

| JS/TS              | Date                 | Quick note                                                                                          |
|--------------------|----------------------|-----------------------------------------------------------------------------------------------------|
| 1.7.1              | August 12th, 2025    | Dependencies update<br/>[type][type] (~~1.2.0~~ → 1.2.1)                                            |
| 1.7.0              | January 8th, 2025    | 2025 update<br/>[type][type] (~~1.1.0~~ → [1.2.0][ts-type-v1.2])                                    |
| [1.6.0][js-v1.6]   | November 7th, 2024   | Addition of predefined `lazyOf` for the `Date`<br/>[type][type] (~~1.0.0~~ → [1.1.0][ts-type-v1.1]) |
| [1.5.0][js-v1.5]   | July 21st, 2024      | Addition of predefined `lazyOf` for the `boolean`, `bigint` & `number`                              |
| 1.4.0              | March 31st, 2024     | Addition of [type][type] to the dependency                                                          |
| [1.3.0][js-v1.3]   | February 19th, 2024  | Standardization of the ~~BIG_INT~~ / BIGINT to only be BIGINT                                       |
| 1.2.1              | December 4th, 2023   | Dependencies update                                                                                 |
| [1.2.0][js-v1.2]   | September 28th, 2023 | Addition of lazy "bigint" numbers<br/>Fix on the empty array to be `readonly []`                    |
| [1.1.1][js-v1.1.1] | August 14th, 2023    | Relocation of the `lazy` & `lazyOf` methods in their own standalone file                            |
| [1.1.0][js-v1.1]   | August 14th, 2023    | New [CommonLazy](https://github.com/joooKiwi/lazy/blob/main/javascript/src/CommonLazy.ts)           |
| 1.0.1              | July 1st, 2023       | Dependencies update                                                                                 |
| 1.0.0              | June 28th, 2023      | The first implementation used in Javascript                                                         |

<!-- Version references -->

[js-v1.1]:   https://github.com/joooKiwi/lazy/releases/tag/v1.1.0-js
[js-v1.1.1]: https://github.com/joooKiwi/lazy/releases/tag/v1.1.1-js
[js-v1.2]:   https://github.com/joooKiwi/lazy/releases/tag/v1.2.0-js
[js-v1.3]:   https://github.com/joooKiwi/lazy/releases/tag/v1.3.0-js
[js-v1.5]:   https://github.com/joooKiwi/lazy/releases/tag/v1.5.0-js
[js-v1.6]:   https://github.com/joooKiwi/lazy/releases/tag/v1.6.0-js

[type]: https://github.com/joooKiwi/type
[ts-type-v1.1]: https://github.com/joooKiwi/type/releases/tag/v1.1.0-ts
[ts-type-v1.2]: https://github.com/joooKiwi/type/releases/tag/v1.2.1-ts

<!-- Version references -->
