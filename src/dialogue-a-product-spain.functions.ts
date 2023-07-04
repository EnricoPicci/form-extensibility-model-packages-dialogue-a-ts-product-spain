import { DialogueState } from 'form-extensibility-model-ts';
import { validateTransitionFrom_B_to_C } from 'form-extensibility-model-ts-product';

export function transitFrom_B_to_C_Spain(
  formValue: any,
  stateService: DialogueState
) {
  const errors: { errorMsg: string }[] = [];
  // first call the validation logic defined at the Product layer
  let err = validateTransitionFrom_B_to_C(formValue);
  if (err) {
    errors.push(err);
  }
  // then call the validation logic defined at the Spain layer
  err = validateTransitionFrom_B_to_C_Spain(formValue);
  if (err) {
    errors.push(err);
  }

  // if errors are encountered, error messages are notified
  if (errors.length > 0) {
    stateService.setMessage(errors.map((err) => err.errorMsg).join('\n'));
    return;
  }
  // if there are no errors than we can go to the next step
  stateService.mergeIntoFormValue(formValue);
  stateService.nextRoute('form-c');
  return;
}

// this function returns an error if the value of the form is not valid and the transition to the next step is not allowed
function validateTransitionFrom_B_to_C_Spain(formValue: any) {
  const field_B_Product_Spain = formValue['field-B-Spain'];
  // the logic is that the field_B_Product must be longer than 5 characters
  if (field_B_Product_Spain && field_B_Product_Spain.length <= 5) {
    return {
      errorMsg:
        'The value of the field "Field-B-Product-Spain" must be longer than 5 characters',
    };
  }
  return null;
}
