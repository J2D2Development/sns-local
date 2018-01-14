// The endpoint that you want to receive notifications. Endpoints vary by protocol
import { isEmail, isURL, isMobilePhone } from 'validator';

export default class Endpoint {
    endpoint: string;
    protocol: string;
    topicArn: string;
    type: string;

    constructor(endpoint, protocol, topicArn) {
        this.topicArn = topicArn;
    }

    validate() {
        switch(this.protocol) {
            // url validation
            case 'http':
                // delivery of JSON-encoded message via HTTP POST
            case 'https':
                // delivery of JSON-encoded message via HTTPS POST
                return isURL(this.protocol);
            // email validation
            case 'email':
                // delivery of message via SMTP
            case 'email-json':
                // delivery of JSON-encoded message via SMTP
                return isEmail(this.protocol);
            // number?
            case 'sms':
                //delivery of message via SMS
                return isMobilePhone(this.protocol, 'any');
            // string?

            case 'sqs':
                // delivery of JSON-encoded message to an Amazon SQS queue
            case 'application':
                // delivery of JSON-encoded message to an EndpointArn for a mobile app and device.
            case 'lambda':
                // delivery of JSON-encoded message to an AWS Lambda function.
            default:
                return String(this.type) === this.type;
        }
    }

    send(payload) {
        // similar switch statement: get the right way to send for this endpoint protol (http for http, smtp for email, etc)
    }
}