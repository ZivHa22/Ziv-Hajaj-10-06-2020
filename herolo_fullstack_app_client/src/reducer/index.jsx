import {combineReducers} from 'redux';

import EmailsReducer from './EmailsRducer/EmailsReducer'

export default combineReducers ({

    Send_Email: EmailsReducer,
    Email_Outbox: EmailsReducer,
    Email_Inbox: EmailsReducer,
    Delete_EmailOutbox: EmailsReducer,
    Delete_EmailInbox: EmailsReducer
})