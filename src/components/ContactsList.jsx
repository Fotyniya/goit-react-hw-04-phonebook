import { nanoid } from 'nanoid';
import {ContactsItem} from "../components/ContactsItem"

export const ContactsList = ({contactsList, onDelete})=> {
    return (
    <ul>
        {contactsList.map(item =>  
            <li key = {nanoid()}>
                <ContactsItem item = {item} onDelete = {onDelete} />
            </li>
        )}
    </ul>
)}