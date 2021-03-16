import Contacts from './contacts.json';
import React from 'react';
import People from './Components/People';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: Contacts.slice(0, 5)
      //seperate array stored within the state that is going to be getting elements
      // from the original contacts array when the button is clicked
    };
  }

  addRandomContact = () => {
    let clonedOriginal = Contacts.filter(
      (contact) => !this.state.people.includes(contact)
    );

    let randomCelebrity =
      clonedOriginal[Math.floor(Math.random() * clonedOriginal.length)];
    // ---1st Try---
    // if (!clonedArray.includes(randomCelebrity)) {
    //   clonedArray.push(randomCelebrity);
    // --> problem: when the button is clicked and the celebrity is already
    //              in the list, nothing happens and one has to click again
    // ---2nd Try---
    // let clonedOriginal = [...Contacts];
    // let index = clonedOriginal.indexOf(randomCelebrity);
    // clonedOriginal.splice(index);
    // --> problem: ? @Stefano: I don't understand what is happening here.
    if (clonedOriginal.length > 0) {
      this.setState({
        people: [...this.state.people, randomCelebrity]
      });
      console.log(clonedOriginal.length, this.state.people.length);
    } else {
      alert('you have run out of celebrities');
    }
  };

  sortByPopularity = () => {
    const sortedArray = [...this.state.people];
    sortedArray.sort((first, second) => second.popularity - first.popularity);
    this.setState({
      people: sortedArray
    });
  };

  sortByName = () => {
    const sortedArray = [...this.state.people];
    sortedArray.sort((first, second) => (second.name > first.name ? -1 : 1));
    this.setState({
      people: sortedArray
    });
  };

  handleDeletion = (id) => {
    // ----- Why is this working:
    const filteredArray = this.state.people.filter(
      (element) => element.id !== id
    );

    // ---Alternative: ---
    // const index = clonedArray.findIndex((contact) => contact.id === id);
    // clonedArray.splice(index, 1);
    // console.log(index);
    this.setState({
      people: filteredArray
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add random Contact</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <People
        //people={this.state.people}
        //addRandomContact={this.addRandomContact}
        ></People>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((person) => {
              return (
                <tr key={person.pictureUrl}>
                  <td>
                    <img
                      src={person.pictureUrl}
                      alt="Celebrity"
                      height="100px"
                    ></img>
                  </td>
                  <td>{person.name}</td>
                  <td>{person.popularity}</td>
                  <td>
                    <button onClick={() => this.handleDeletion(person.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
