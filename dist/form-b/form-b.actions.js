"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransitFrom_B_to_C_Spain = void 0;
const dialogue_a_product_spain_functions_1 = require("../dialogue-a-product-spain.functions");
// create the "bridge" function that calls the specific function that the Spain layer implements
// as customizaion of the generic Product behaviour
function getTransitFrom_B_to_C_Spain(_formLayout) {
    return (formValue, stateService, _event) => {
        //
        // here is the logic to implement
        // call the form service appropriate method
        (0, dialogue_a_product_spain_functions_1.transitFrom_B_to_C_Spain)(formValue, stateService);
    };
}
exports.getTransitFrom_B_to_C_Spain = getTransitFrom_B_to_C_Spain;
//# sourceMappingURL=form-b.actions.js.map