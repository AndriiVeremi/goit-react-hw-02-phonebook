// import React, { Component } from 'react';

// import ContactList from './ContactList/ContactList';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import Section from './Section/Section';
// import Header from './Header/Header';

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//     name: '',
//     number: '',
//   };

//   addToList = e => {
//     e.preventDefault();
//     const { name, number } = e.target.elements;
//     const user = {
//       id: name.id,
//       name: name.value,
//       number: number.value,
//     };

//     this.setState(prevState => ({
//       contacts: [user, ...prevState.contacts],
//     }));
//   };

//   deleteContacts = userId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(user => user.id !== userId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizeFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilter)
//     );
//   };

//   render() {
//     const { filter, contacts } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <>
//         <Section title="Phonebook">
//           <ContactForm value={contacts} onAddToList={this.addToList} />
//           <Header title="Contacts" />
//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactList
//             value={visibleContacts}
//             onDeleteContacts={this.deleteContacts}
//           />
//         </Section>
//       </>
//     );
//   }
// }

// export default App;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template Dashuk
    </div>
  );
};
