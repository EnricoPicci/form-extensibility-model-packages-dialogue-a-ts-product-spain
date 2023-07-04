"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const rxjs_1 = require("rxjs");
const form_extensibility_model_ts_1 = require("form-extensibility-model-ts");
const dialogue_a_product_spain_functions_1 = require("./dialogue-a-product-spain.functions");
describe(`transitFrom_B_to_C_Spain`, () => {
    it(`the state should notify the next route`, (done) => {
        const state = new form_extensibility_model_ts_1.DialogueState();
        const dialoguePath = 'the-dialogue-path/';
        state.dialoguePath = dialoguePath;
        const formValue = { field_B_Product_Spain: 'A value longer than 5' };
        const nextRoute = 'form-c';
        // this is the actual test which is performed by subscribing to the various observables exposed by the state
        const testRoute = state.nextRoute$.pipe((0, rxjs_1.tap)((_nextRoute) => {
            (0, chai_1.expect)(_nextRoute).equal(dialoguePath + nextRoute);
        }), (0, rxjs_1.take)(1) // take 1 so that the Observable completes
        );
        testRoute.subscribe({
            error: (err) => done(err),
            complete: () => done(), // complete is run since all the Observables complete
        });
        (0, dialogue_a_product_spain_functions_1.transitFrom_B_to_C_Spain)(formValue, state);
    });
});
//# sourceMappingURL=dialogue-a-product-spain.functions.spec.js.map