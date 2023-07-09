
const accordions = document.querySelectorAll('.accordion__item');

accordions.forEach(accordion => {
	accordion.addEventListener('click', setNewTab)
});

function setNewTab(e) {
  const activeAccordion = document.querySelector('.accordion__item--active');
  const accordionItem = e.currentTarget;
  const accordionItemContent = accordionItem.querySelector('.accordion__itemContent');

  if (activeAccordion === accordionItem) {
    activeAccordion.classList.remove('accordion__item--active');
    accordionItemContent.style.height = '0';
    return;
  };

  if (activeAccordion) {
    activeAccordion.classList.remove('accordion__item--active');
    activeAccordion.querySelector('.accordion__itemContent').style.height = '0';
  };

  accordionItem.classList.add('accordion__item--active');
  accordionItemContent.style.height = 'auto';
};
