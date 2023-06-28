/** A simple class made to hold the necessary values for the tests */
export class Holder<const T, const MESSAGE extends string, const EXPECTED_THROW_MESSAGE extends string, > {

    readonly toString

    public constructor(
        /** The simple value to send to any {@link Lazy} implementation */
        public readonly value: T,
        message: MESSAGE,
        /** The expected throw message in the {@link LazyImplementation} construction if it wasn't sepected */
        public readonly expectedThrowMessage: EXPECTED_THROW_MESSAGE,
    ) {
        this.toString = () => message
    }

}
