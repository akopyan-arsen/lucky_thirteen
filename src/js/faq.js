import initAccordion from './Libraries/accordion';

var accordion = new Accordion('.faq-tab', {
  duration: 300,
  easing: 'ease-in-out',
  trigger: 'click',
  multiple: false,
  activeClass: 'active',
  disabledClass: 'disabled',
  openFirst: false,
});
