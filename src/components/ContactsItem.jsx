export const ContactsItem = ({item, onDelete})=> {
    return (
        <div>
            <span>{item.name}: {item.number}</span>
            <button type="button" onClick = {()=>onDelete(item.id)}>Delete</button>
        </div>     
)}