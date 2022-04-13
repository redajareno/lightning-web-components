import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {


    constructor() {
        super();
        console.log('child constructor called');
    }

    connectedCallback() {
        console.log('child connectedCallback called');
        throw new Error('loading of child component failed');
    }
    
    renderedCallback() {
        console.log('child renderedCalback called');
    }
    
    disconnectedCallback() {
        alert('Child disconnectedCallback called !!');
    }
}