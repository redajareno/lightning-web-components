import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { APPLICATION_SCOPE, MessageContext, subscribe } from 'lightning/messageService';

export default class LmsCompenentX extends LightningElement {
    receivedMessage;

    @wire(MessageContext)
    context;

    connectedCallback() {
        this.subscribeMessage();
    }

    subscribeMessage() {
        // subscribe(messageContext, messageChannel, listener, subscriberOptions)
        subscribe(this.context, SAMPLEMC, (message) => { this.handleMessage(message) }, { scope: APPLICATION_SCOPE });
    }

    handleMessage(message) {
        return this.receivedMessage = message.lmsData.value ? message.lmsData.value : 'NO Message published';
    }

}