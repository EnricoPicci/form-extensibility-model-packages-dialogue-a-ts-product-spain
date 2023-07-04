"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transitFrom_B_to_C_Spain = void 0;
const form_extensibility_model_ts_product_1 = require("form-extensibility-model-ts-product");
function transitFrom_B_to_C_Spain(formValue, stateService) {
    const errors = [];
    // first call the validation logic defined at the Product layer
    let err = (0, form_extensibility_model_ts_product_1.validateTransitionFrom_B_to_C)(formValue);
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
exports.transitFrom_B_to_C_Spain = transitFrom_B_to_C_Spain;
// this function returns an error if the value of the form is not valid and the transition to the next step is not allowed
function validateTransitionFrom_B_to_C_Spain(formValue) {
    const field_B_Product_Spain = formValue['field-B-Spain'];
    // the logic is that the field_B_Product must be longer than 5 characters
    if (field_B_Product_Spain && field_B_Product_Spain.length <= 5) {
        return {
            errorMsg: 'The value of the field "Field-B-Product-Spain" must be longer than 5 characters',
        };
    }
    return null;
}
//# sourceMappingURL=dialogue-a-product-spain.functions.js.map