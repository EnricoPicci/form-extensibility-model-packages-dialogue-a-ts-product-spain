import { DynamicFormLayout } from 'form-extensibility-model-ts';

import { DialogueState } from 'form-extensibility-model-ts';
import { transitFrom_B_to_C_Spain } from '../dialogue-a-product-spain.functions';

// create the "bridge" function that calls the specific function that the Spain layer implements
// as customizaion of the generic Product behaviour
export function getTransitFrom_B_to_C_Spain(_formLayout: DynamicFormLayout) {
  return (formValue: any, stateService: DialogueState, _event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    transitFrom_B_to_C_Spain(formValue, stateService);
  };
}
