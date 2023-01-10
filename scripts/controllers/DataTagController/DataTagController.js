const { WebcController } = WebCardinal.controllers;
export default class DataTagController extends WebcController {
  constructor(...props) {
    super(...props);
    this.onTagEvent('plus-btn', 'click', () => {
      this.getElementByTag("counter").value++;
    });
    this.onTagClick('minus-btn', () => {
      this.getElementByTag("counter").value--;
    });
    this.onTagEvent('counter', 'wheel', (model, target, event) => {
      event.preventDefault();
      event.deltaY > 0 ? target.value-- : target.value++
    });
  }
}
