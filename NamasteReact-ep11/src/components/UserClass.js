import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(this.props.name + " constructor");
  }
  async componentDidMount() {
    // console.log(this.props.name + " componentDidMount");
    //API CALLS
    // const data = await fetch("https://api.github.com/users/Shaktiswarup07");
    // const json = await data.json();

    // this.setState({
    //   userInfo: json,
    // });
    // console.log(json);/
    this.timer = setInterval(() => {
      // console.log("Namaste React OP");
    }, 1000);
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("componentWillUnmount");
  }
  render() {
    // console.log(this.props.name + "child render");
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact: @sm07</h4>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
export default UserClass;
