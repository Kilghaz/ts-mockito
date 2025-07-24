import {MethodAction} from "../MethodAction";
import {MethodToStub} from "../MethodToStub";
import {Matcher} from "../matcher/type/Matcher";
import * as _ from "lodash";

export class MethodCallToStringConverter {
    public convert(method: MethodToStub): string {
        const stringifiedMatchers = _(method.matchers)
            .map((it: Matcher) => it.toString())
            .compact()
            .join(', ');
        return `${method.name}(${stringifiedMatchers})" `;
    }

    public convertActualCalls(calls: MethodAction[]): string[] {
        return calls.map(call => `${call.methodName}(${call.args.map(arg => arg.toString()).join(", ")})`);
    }
}
