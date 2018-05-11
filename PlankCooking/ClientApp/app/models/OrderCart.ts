
export class OrderCart {

    orderCartID: number;
    status: number;
    notes: string;
    purchaseDate: Date;
    history: string;
    taxes: number;
    orderTotal: number;
    shippingFirstName: string;
    shippingLastName: string;
    shippingAddress1: string;
    shippingAddress2: string;
    shippingCity: string;
    shippingState: string;
    shippingPostalCode: string;
    shippingPhone: string;
    shippingEmail: string;
    billingAddress1: string;
    billingAddress2: string;
    billingCity: string;
    billingState: string;
    billingPostalCode: string;
    uniqueIdentifier: string;
    websiteID: number;
    dateCreated: Date;
    billingFirstName: string;
    billingLastName: string;
    billingPhone: string;
    billingEmail: string;
    shippingCountry: string;
    billingCountry: string;
    authorizationCode: string;
    transactionID: string;
    shippingValidation: boolean;
    shippingCost: number;
    shippingType: number;
    creditCardType: string;


    constructor() {

        this.orderCartID = 0;
        this.status = 0;
        this.notes = "";
        this.purchaseDate = new Date;
        this.history = "";
        this.taxes = 0;
        this.orderTotal = 0;
        this.shippingAddress1 = "";
        this.shippingAddress2 = "";
        this.shippingCity = "";
        this.shippingCountry = "";
        this.shippingEmail = "";
        this.shippingFirstName = "";
        this.shippingLastName = "";
        this.shippingPhone = "";
        this.shippingPostalCode = "";
        this.shippingState = "";
        this.billingAddress1 = "";
        this.billingAddress2 = "";
        this.billingCity = "";
        this.billingCountry = "";
        this.billingEmail = "";
        this.billingFirstName = "";
        this.billingLastName = "";
        this.billingPhone = "";
        this.billingPostalCode = "";
        this.billingState = "";
        this.uniqueIdentifier = "";
        this.websiteID = 0;
        this.dateCreated = new Date;
        this.authorizationCode = "";
        this.transactionID = "";
        this.shippingValidation = false;
        this.shippingCost = 0;
        this.shippingType = 0;
        this.creditCardType = "";


    }
}