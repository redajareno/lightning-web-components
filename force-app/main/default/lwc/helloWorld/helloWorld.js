import { LightningElement, track } from 'lwc'; // LightningElement imported by lwc package, core package that handle all lwc execution 

export default class HelloWorld extends LightningElement {
    /**
     * @description Data binding example
     */
    fullName = 'Zero to Hero';
    title = 'aura';

    changeHandler(event) {
        this.title = event.target.value;
    }

    /**
     * @description @track binding example
     */
    address = {
    // @track address = {
        city: 'Waipahu',
        postcode: 96797,
        country: 'USA'
    };

    trackHandler(event) {
        // this.address.city = event.target.value; // using @track propertie, but it is deprecated '20
        this.address = {...this.address, 'city': event.target.value}; // using spread operator better way
    }

    /**
     * @description Getters example
     */
    users = ['tina', 'momo', 'reno'];
    num1 = 10;
    num2 = 20;

    get firstUser() {
        return this.users[0].toUpperCase();
    }

    get multiply() {
        return this.num1 * this.num2;
    }


} // end HelloWorld class