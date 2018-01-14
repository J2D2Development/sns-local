export interface MessageAttributes {
    DataType: string; /* required */
    BinaryValue: Buffer | string; /* Strings will be Base-64 encoded on your behalf */
    StringValue: string;
}

export interface PublishParams {
    Message: string; /* required */
    MessageAttributes: MessageAttributes;
    MessageStructure: string;
    PhoneNumber: 'STRING_VALUE',
    Subject: 'STRING_VALUE',
    TargetArn: 'STRING_VALUE',
    TopicArn: 'STRING_VALUE'
}