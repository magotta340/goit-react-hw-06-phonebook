// import React, { Component } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Сontainer";
import Filter from "./components/Filter/Filter";
import { getVisibleContacts } from './redux/app/app-selectors';

// import appActions from "./redux/app/app-actions";
import { useSelector } from "react-redux";

export default function App() {
  const contacts = useSelector(getVisibleContacts);
  const totalContactsCount = contacts.length;
  
    return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <p>Общее кол-во: {totalContactsCount}</p>
      <Filter />
      <ContactList />
    </Container>
  );
}
// class App extends Component {
//   filterArr = (fArr) => {
//     let newArr = fArr.filter((cur) =>
//       cur.name.toUpperCase().includes(this.props.filter)
//     );
//     return newArr;
//   };

//   render() {
//     return (
//       <Container>
//         <div className="App">
//           <h1>Phonebook</h1>
//           <ContactForm onSubmitData={this.props.formSubmitHandler} />
//           <h1>Contacts</h1>
//           <Filter setFilterToState={this.props.filterSet} />
//           <ContactList
//             contacts={this.filterArr(this.props.contacts)}
//             del={this.props.contactDelete}
//           />
//           </div>
//       </Container>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   contacts: state.app.contacts,
//   filter: state.app.filter,
// });
// const mapDispatchToProrps = (dispatch) => ({
//   formSubmitHandler: (contactData) =>
//     dispatch(appActions.addContact(contactData)),
//   contactDelete: (contactId) => dispatch(appActions.deleteContact(contactId)),
//   filterSet: (str) => dispatch(appActions.filterSet(str)),
// });
// export default connect(mapStateToProps, mapDispatchToProrps)(App);
