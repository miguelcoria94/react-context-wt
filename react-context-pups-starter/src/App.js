import React from 'react';
import PupContext from './PupContext';
import speedy from './pups/speedy-pup.jpg';
import banana from './pups/banana-pup.jpg';
import sleepy from './pups/sleepy-pup.jpg';



const App = ({ puppyType }) => (
  <div id="pup">
    <img src={puppyType} alt='pup' />
  </div>
)

class AppWithContext extends React.Component {
  constructor() {
    super();
    this.state = {
      puppyType: speedy,
    }
  }

  render() {
    return (
      <PupContext.Provider value={this.state}>
        <App puppyType={this.state.puppyType} />
      </PupContext.Provider>
    )
  }
}

export default App;
