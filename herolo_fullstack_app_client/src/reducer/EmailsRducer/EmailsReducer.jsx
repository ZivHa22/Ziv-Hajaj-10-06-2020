export default (state=[], action)=>{
    switch(action.type){
        case 'Send_Email':
            return action.payload;  
        case 'Get_Inbox':
            return action.payload;   
        case 'Get_Outbox':
            return action.payload;  
        case 'Delete_Inbox_Email':
            return action.payload;  
        case 'Delete_Inbox_Email':
            return action.payload;     
        default:
            return state;
    }
}