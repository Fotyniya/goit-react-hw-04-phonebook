import { useState, useEffect } from "react";
import { GlobalStyle } from "../components/GlobalStyle";
import { Layout } from "../components/Layout"
import { ContactsForm } from "../components/ContactsForm/ContactsForm";
import { ContactsList } from "../components/ContactsList";
import { Filter } from "../components/Filter/Filter";

export const App = () => {
  const [contacts, setContacts] = useState(()=> JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  const addContact=(contact)=>{
    for (const item of contacts){
      if (item.name === contact.name) {
        alert (`${contact.name} is already in contacts`); 
        return;
      }
     }
    setContacts(prevState => [...prevState, contact]);
    console.log(contacts);
  };

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = (id) => {
    console.log(id)
    setContacts(contacts.filter(contact => contact.id !== id))
  };

  const filtredContacts = 
  contacts
  .filter(contact => (contact.name).toUpperCase().includes((filter).toUpperCase()));
  console.log(filtredContacts);
  
  useEffect(()=>{
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts]);

  return (
    <Layout> 
      <h1>Phonebook</h1>
      <ContactsForm onSubmit = {addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChange={changeFilter}/>
      <ContactsList contactsList = {filtredContacts} onDelete = {deleteContact} />
    <GlobalStyle/>
    </Layout>
  );
};
