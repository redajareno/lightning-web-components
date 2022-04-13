import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val = 20;

    changeHandler(event) {
        this.val = event.target.value;
    }

    // resetSlider() method in Child Class is public AND expose to parent component
    @api resetSlider() { 
        this.val = 50;
    }
}