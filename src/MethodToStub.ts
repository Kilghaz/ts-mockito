import {Matcher} from "./matcher/type/Matcher";
import {MethodStubCollection} from "./MethodStubCollection";
import {Mocker} from "./Mock";
import {OptionalMatcher} from "./matcher/type/OptionalMatcher";
import {AnyNumberMatcher} from "./matcher/type/AnyNumberMatcher";
import {AnyOfClassMatcher} from "./matcher/type/AnyOfClassMatcher";

export class MethodToStub {
    constructor(public methodStubCollection: MethodStubCollection,
                public matchers: Matcher[],
                public mocker: Mocker,
                public name: string) {
        this.matchers.push(new OptionalMatcher(new AnyNumberMatcher()));
        this.matchers.push(new OptionalMatcher(new AnyOfClassMatcher(Array)));
    }
}
