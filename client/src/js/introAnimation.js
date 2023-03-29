import playIcon from '../images/icons/play.svg';

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const intro = document.querySelector('.intro');
    intro.classList.add('active');
    const introHeader = document.querySelector('.intro__header');    
    const headerText = introHeader.innerHTML;
    const splitHeaderText = headerText.split('<br>').map((sentence, index) => {
      const div = document.createElement('div');
      const span = document.createElement('span');
      span.style.setProperty('--animation-delay', `${index * 0.25}s`);
      span.textContent = sentence;
      div.appendChild(span);
      return div;
    });
    introHeader.innerHTML = '';
    splitHeaderText.forEach(line => {
      introHeader.insertAdjacentElement('beforeEnd', line);
    })

    introHeader.querySelector('div:last-child > span').addEventListener('animationend', () => {
      const introButton = document.querySelector('.intro__button');
      const buttonText = introButton.textContent;
      introButton.innerHTML = `<div><span><i>${buttonText}</i> <img height="11" src="${playIcon}"/></span></div>`;
    })
  }, 600);
})