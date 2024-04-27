import initAccordion from './accordion';

const buildAboutMe = () => {
  initAccordion('.accordion-container.about-me', {
    openOnInit: [0],
  });
};

export default buildAboutMe;
