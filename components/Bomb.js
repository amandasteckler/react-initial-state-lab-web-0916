const React = require('react');

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    let returnStatement
    if (this.state.secondsLeft > 0) {
      returnStatement = `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      returnStatement = "Boom!"
    }
    return (
      <div>
        {returnStatement}
      </div>
    )
  }
}

module.exports = Bomb
