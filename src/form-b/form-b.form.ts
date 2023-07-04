import { TextboxQuestion } from 'form-extensibility-model-ts';
import { get_Form_B_Layout } from 'form-extensibility-model-ts-product';
import { getTransitFrom_B_to_C_Spain } from './form-b.actions';

export function getFormBSpainLayout() {
  // retrieve the layout for Form B at the Product level
  // this is the layout that we want to customize
  const formLayout = get_Form_B_Layout();

  // create the new question
  const newQuestion = new TextboxQuestion({
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
  nextAction.function = getTransitFrom_B_to_C_Spain(formLayout);

  // return the customized layout
  return formLayout;
}
