import { v4 } from 'uuid';
import Endpoint from './Endpoint';

export default class Subscriber {
    topicName: string;
    id: string;
    endpoint: Endpoint;

    constructor(topicName, endpoint, protocol, topicArn) {
        this.topicName = topicName;
        this.id = v4();
        this.endpoint = new Endpoint(endpoint, protocol, topicArn)
    }

    send(payload) {
        this.endpoint.send(payload);
    }
}