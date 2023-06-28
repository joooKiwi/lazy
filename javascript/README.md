# Lazy (javascript version)

This project is a simple implementation of the [Kotlin Lazy](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-lazy/).
And if in any shape or form, there is a NPM usage from the Kotlin team itself, this will become deprecated.

With that clarified, here is how it can be used.

## Lazy value

Utilising the lazy value will always return a `Lazy` object holding a value.

```javascript
import {lazy} from "@joookiwi/lazy"

const firstValue = lazy(() => 2)
firstValue.isInitialized // false
firstValue.value         // 2
firstValue.isInitialized // true
```
## Non-lazy value

If the value is already known, then just use `lazyOf()` in order to have a `Lazy` with an already loaded value.

```javascript
import {lazy} from "@joookiwi/lazy"

const firstValue = lazyOf(2)
firstValue.isInitialized // true
firstValue.value         // 2
firstValue.isInitialized // true
```
