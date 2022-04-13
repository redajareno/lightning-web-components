import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Ford", "Audi", "Maruti", "Hyundai", "Mercedes"];

    ceoList = [
        {
            id: 1,
            company: "Google",
            name: "Google 1"
        },
        {
            id: 2,
            company: "Apple",
            name: "Apple 1"
        },
        {
            id: 3,
            company: "Facebook",
            name: "Facebook 1"
        },
        {
            id: 4,
            company: "Microsoft",
            name: "Microsoft 1"
        },
    ]
}