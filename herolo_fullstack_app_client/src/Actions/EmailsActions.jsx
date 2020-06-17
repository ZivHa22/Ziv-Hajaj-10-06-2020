
import api from './api';


export const SendEmail = (data)=>async dispatch=>{
    const Res = await api.post('/SendEmail',data);
    dispatch({type:'Send_Email',payload:Res.data})
};

export const GetInbox = ()=>async dispatch=>{
    const Res = await api.get('/GetInbox');
    dispatch({type:'Get_Inbox',payload:Res.data})
};
export const GetOutbox = (data)=>async dispatch=>{
    const Res = await api.get('/GetOutbox',data);
    dispatch({type:'Get_Outbox',payload:Res.data})
};
export const DeleteInboxEmail = (data)=>async dispatch=>{
    const Res = await api.post('/DeleteInboxEmail',data);
    dispatch({type:'Delete_Inbox_Email',payload:Res.data})
};
export const DeleteOutboxEmail = (data)=>async dispatch=>{
    const Res = await api.post('/DeleteOutboxEmail',data);
    dispatch({type:'Delete_Inbox_Email',payload:Res.data})
};