const uuid = require('uuid/v4');
const Subscriber = require('./Subscriber');

export default class Topic {
    constructor(subscribers = []) {
        this.id = uuid();
        this.arn = 'should-this-be-generated';
        this.subscribers = subscribers;
    }

    subscribe(endpoint, protocol, subscriber) {
        // create new subscriber

        // add sub to array
        this.subscribers.push(subscriber);

        //return success/failure and send notification to subscriber with link for unsub if success 
    }

    unsubscribe(id) {
        // get the index of the sub to remove
        const remove = this.subscribers.findIndex(subscriber => subscriber.id === id);

        if(!remove) {
            return `No subscriber with id ${id}`;
        }

        // remove the sub
        const removed = this.subscribers.splice(remove, 1);

        // fire confirmation message

    }

    broadcast(payload) {
        // loop subscribers and send payload to each (should the subscriber have a 'send' function to detail how to send - there can be many different ways- sms, email, http, etc)
    }

}