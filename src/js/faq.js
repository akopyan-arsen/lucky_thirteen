import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

  var accordion = new Accordion('.faq-inner-container', {
    duration: 300,
    easing: 'ease-in-out',
    trigger: 'click',
    multiple: false,
    activeClass: 'active',
    disabledClass: 'disabled',
    openFirst: false
  });
