import Swiper from 'swiper';

export default class BuildrSwiper {
    constructor(container, options) {
        this.element = this.bindContainer(container);

        this.swiper = new Swiper(this.element, options);
    }

    bindContainer(container) {
      if (container instanceof HTMLElement) {
        return container;
      }
      const el = document.querySelector(container);
      if (!el) throw new Error('Not found element');
      return el;
    }
}
