import { v4 } from 'uuid';
import Subscriber from './Subscriber';

export default class Topic {
    id: string;
    arn: string;
    subscribers: Subscriber[];

    constructor(subscribers: Subscriber[] = []) {
        this.id = v4();
        this.arn = 'should-this-be-generated';
        this.subscribers = subscribers;
    }

    subscribe(endpoint, protocol) {
        // create new subscriber
        const newSubscriber = new Subscriber('test', 'endpoint', 'http', this.arn);

        // add sub to array
        this.subscribers.push(newSubscriber);

        //return success/failure and send notification to subscriber with link for unsub if success
        console.log('you have subscribed'); 
    }

    unsubscribe(id) {
        // get the index of the sub to remove
        const remove = this.subscribers.map(s => s.id).indexOf(id);

        if(!remove || remove === -1) {
            return `No subscriber with id ${id}`;
        }

        // remove the sub
        const removed = this.subscribers.splice(remove, 1);

        // fire confirmation message
        console.log('unsubscribed!');
    }

    broadcast(payload) {
        // loop subscribers and send payload to each (should the subscriber have a 'send' function to detail how to send - there can be many different ways- sms, email, http, etc)
    }

}