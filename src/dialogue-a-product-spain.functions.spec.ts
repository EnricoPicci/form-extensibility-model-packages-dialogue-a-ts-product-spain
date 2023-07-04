import { expect } from 'chai';
import { tap, take } from 'rxjs';

import { DialogueState } from 'form-extensibility-model-ts';
import { transitFrom_B_to_C_Spain } from './dialogue-a-product-spain.functions';

describe(`transitFrom_B_to_C_Spain`, () => {
    it(`the state should notify the next route`, (done) => {
        const state = new DialogueState();
        const dialoguePath = 'the-dialogue-path/';
        state.dialoguePath = dialoguePath

        const formValue = { field_B_Product_Spain: 'A value longer than 5' };
        const nextRoute = 'form-c'

        // this is the actual test which is performed by subscribing to the various observables exposed by the state
        const testRoute = state.nextRoute$.pipe(
            tap((_nextRoute) => {
                expect(_nextRoute).equal(dialoguePath + nextRoute);
            }),
            take(1) // take 1 so that the Observable completes
        );
        testRoute.subscribe({
            error: (err) => done(err),
            complete: () => done(), // complete is run since all the Observables complete
        })

        transitFrom_B_to_C_Spain(formValue, state);
    });
});
