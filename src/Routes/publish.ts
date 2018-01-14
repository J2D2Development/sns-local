import { Router } from 'express';
import { PublishParams } from '../Params/publish-params';

// Authorized applications can hit this route to publish (send) a message to all subscribers to a topic

const PublishRouter: Router = Router();

PublishRouter.post(':topicName', (req, res) => {

});

function publish(params: PublishParams, cb) {
    // TODO: move to own file and expand
    /**
     * @params: info about what we are sending to all subscribed endpoints
     * @cb: callback that fires when we are done?  this shouldn't actually send the messages, but set up something that does?
     */
    
}

var params = {
    Message: 'STRING_VALUE', /* required */
    MessageAttributes: {
      '<String>': {
        DataType: 'STRING_VALUE', /* required */
        BinaryValue: new Buffer('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        StringValue: 'STRING_VALUE'
      },
      /* '<String>': ... */
    },
    MessageStructure: 'STRING_VALUE',
    PhoneNumber: 'STRING_VALUE',
    Subject: 'STRING_VALUE',
    TargetArn: 'STRING_VALUE',
    TopicArn: 'STRING_VALUE'
  };
  sns.publish(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
});

export default PublishRouter;