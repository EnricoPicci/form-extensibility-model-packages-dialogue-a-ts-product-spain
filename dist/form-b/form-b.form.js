"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormBSpainLayout = void 0;
const form_extensibility_model_ts_1 = require("form-extensibility-model-ts");
const form_extensibility_model_ts_product_1 = require("form-extensibility-model-ts-product");
const form_b_actions_1 = require("./form-b.actions");
function getFormBSpainLayout() {
    // retrieve the layout for Form B at the Product level
    // this is the layout that we want to customize
    const formLayout = (0, form_extensibility_model_ts_product_1.get_Form_B_Layout)();
    // create the new question
    const newQuestion = new form_extensibility_model_ts_1.TextboxQuestion({
        key: 'field-B-Spain',
        label: 'Field-B-Spain',
        value: '',
        order: 1.5,
    });
    // add the new question to the layout
    formLayout.elements.push(newQuestion);
    // get the action we want to customize
    const nextAction = formLayout.getUniqueAction('Next');
    // customize the action setting th new function
    nextAction.function = (0, form_b_actions_1.getTransitFrom_B_to_C_Spain)(formLayout);
    // return the customized layout
    return formLayout;
}
exports.getFormBSpainLayout = getFormBSpainLayout;
//# sourceMappingURL=form-b.form.js.map