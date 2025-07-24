import {Matcher} from "./Matcher";

export class OptionalMatcher extends Matcher {
    constructor(private expectedValue: any) {
        super();
    }

    public match(value: Object): boolean {
        if (value === undefined) {
            return true;
        }
        if (value instanceof Matcher) {
            return value.match(this.expectedValue);
        }
        return value === this.expectedValue;
    }

    public toString() {
        return undefined;
    }
}
