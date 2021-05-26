import React from "react";

import UserList from "./UserList";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./Users.css";

const LIMIT = 10;

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      a: 0,
      b: 10,
    };
    this.nextHandler = this.nextHandler.bind(this);
    this.previousHandler = this.previousHandler.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({
          items: result,
        });
      });
  }

  nextHandler() {
    this.setState({ a: this.state.a + LIMIT, b: this.state.b + LIMIT }); // To go to next page
  }

  previousHandler() {
    this.setState({ a: this.state.a - LIMIT, b: this.state.b - LIMIT }); // to go to previous page
  }

  render() {
    const { a, b, items } = this.state;
    return (
      <div>
        <UserList userItems={items.slice(a, b)} />{" "}
        {/* To display only particular number of items in the list recieved from API */}
        <Card className="buttonGroup">
          {(a == 0 && b == LIMIT) || ( // To hide the previous button
            <Button onClick={this.previousHandler}>Previous</Button>
          )}
          {b >= items.length || ( // To hide the next button
            <Button onClick={this.nextHandler}>Next</Button>
          )}
        </Card>
      </div>
    );
  }
}

export default Users;
