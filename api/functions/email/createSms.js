//sending SMS:
const AWS = require('aws-sdk');
const sns = new AWS.SNS({ region: 'us-east-1' });

exports.handler = async (event, context) => {

    const data = JSON.parse(event.body);
    const phone_number = data.PHONE;
    const message = data.MESSAGE;

  const params = {
    PhoneNumber: phone_number,
    Message: message
  };

  try {
    const result = await sns.publish(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};