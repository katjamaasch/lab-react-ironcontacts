import React from 'react';
import Contacts from '../contacts.json';

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [...Contacts.slice(0, 5)]
    };
  }
  addRandomContact = () => {
    const newArray = [...Contacts];
    let randomNumber = Math.round(Math.random() * Contacts.length);
    //console.log(randomNumber);
    let randomCelebrity = newArray[randomNumber];
    //console.log(randomCelebrity);
    this.setState({
      people: this.state.people.push(randomCelebrity)
    });
    //console.log('this.state.people', this.state.people);
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          <tbody>
            {this.state.people.map((person) => {
              return (
                <tr>
                  <td>
                    <img
                      src={person.pictureUrl}
                      alt="Celebrity"
                      height="100px"
                    ></img>
                  </td>
                  <td key={person}>{person.name}</td>
                  <td>{person.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button onClick={this.addRandomContact}>Add random Contact</button>
      </div>
    );
  }
}

export default People;
