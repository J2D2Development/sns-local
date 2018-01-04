const uuid = require('uuid/v4');
const Endpoint = require('./Endpoint');

export default class Subscriber {
    constructor(topicName, endpoint, protocol, topicArn) {
        this.topicName = topicName;
        this.id = uuid();
        this.endpoint = new Endpoint(endpoint, protocol, topicArn)
    }

    send(payload) {
        this.endpoint.send(payload);
    }
}