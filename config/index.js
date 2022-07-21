import dotenv from 'dotenv';
dotenv.config();


const corsClient = {
    domain: process.env.CORS_CLIENT_DOMAIN
};


const twilioConfig = {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    apiKey: process.env.TWILIO_API_KEY,
    apiSecret: process.env.TWILIO_API_SECRET,
    serviceSid: process.env.TWILIO_SERVICE_SID
};


const port = process.env.PORT || '5000';

export { corsClient, port, twilioConfig };