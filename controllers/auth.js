import { twilioConfig } from '../config/index.js';
import twilio from 'twilio';
import jwt_decode from "jwt-decode";


function getToken(req, res, next) {
    const action = req.header('action');
    let user_name;

    if (action === 'login') {
        const token = req.header('token');
        const decoded = jwt_decode(token);
        user_name = decoded.user_metadata.user_name;
    } else if (action === 'add') {
        user_name = req.header('token');
    }

    try {

        const AccessToken = twilio.jwt.AccessToken;
        const ChatGrant = AccessToken.ChatGrant;
    
        const token = new AccessToken(
            twilioConfig.accountSid,
            twilioConfig.apiKey,
            twilioConfig.apiSecret,
            { identity: user_name }
        );
    
        const conversationGrant = new ChatGrant({
            serviceSid: twilioConfig.serviceSid,
        });
    
        token.addGrant(conversationGrant);
    
        res.send({token: token.toJwt()}) ;
    }

    catch (error) {
        next({ error, message: 'There was a problem creating your token' });
    }
}

export { getToken };