import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const initAccordion = (accordionClasses, options = {}) => {
  new Accordion(accordionClasses, options);
};

export default initAccordion;
