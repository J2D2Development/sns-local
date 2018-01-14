import { Router } from 'express';

// sns endpoint for an application to subscribe to a topic
const SubscribeRoute: Router = Router();

SubscribeRoute.get('/', (req, res) => {
    res.json({
        success: false,
        msg: 'Please provide a topic name when subscribing'
    });
});

SubscribeRoute.get('/:topicName', (req, res): void => {
    res.json({
        success: true,
        msg: `You have subscribed to topic ${req.params.topicName}`
    });
});

export default SubscribeRoute;