//imports dependencies and files
import React, { Component } from "react";
// import Jumbotron from "./components/Jumbotron";
import UserCard from "./components/UserCard";
import ballers from "./ballers.json";


class App extends Component {
    state = {
      ballers,
      playerClicked: [],
      score: 0
    };

    imageClick = event => {
        const currentBaller = event.target.alt;
        const ballerClicked =
          this.state.playerClicked.indexOf(currentBaller) > -1;
    
          if (ballerClicked) {
            this.setState({
              ballers: this.state.ballers.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              playerClicked: [],
              score: 0
            });
              alert("You lose. Play again?");
      
      //if you click on an available ballers, your score is increased and cards reordered
          } else {
            this.setState(
              {
                ballers: this.state.ballers.sort(function(a, b) {
                  return 0.5 - Math.random();
                }),
                playerClicked: this.state.playerClicked.concat(
                  currentBaller
                ),
                score: this.state.score + 1
              },
      //if you get all 12 ballers corrent you get a congrats message and the game resets        
              () => {
                if (this.state.score === 12) {
                  alert("You Win!");
                  this.setState({
                    ballers: this.state.ballers.sort(function(a, b) {
                      return 0.5 - Math.random();
                    }),
                    playerClicked: [],
                    score: 0
                  });
                }
              }
            );
          
}
};    

  render() {
    return (
      <div>
        <div className="wrapper">
          {this.state.ballers.map(ballers => (
            <UserCard
              imageClick={this.imageClick}
              id={ballers.id}
              key={ballers.id}
              image={ballers.image}
            />
          ))}
        </div>
      </div>
    );
  }
}


export default App;