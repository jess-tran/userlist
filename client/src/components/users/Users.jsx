import React from "react";
import SingleUser from "./SingleUser";

class Users extends React.Component {
  state = {
    users: [],
    mappedUsers: []
  };

  componentDidMount() {
    this.displayUsers();
  }

  displayUsers = () => {
    fetch("/api/users")
      .then(response => response.json())
      .then(users =>
        this.setState({ users }, () => {
          console.log(this.state.users);
          this.setState({ mappedUsers: this.state.users.map(this.mapUsers) });
        })
      )
      .catch(this.getUsersError);
  };

  getUsersError = error => {
    console.log(error);
  };

  toggleButton = data => {
    let users = [...this.state.users];
    let index = users.findIndex(user => user.id === data.id);

    if (index >= 0) {
      users[index].isDisplayed = !users[index].isDisplayed;
      this.setState(() => {
        return { mappedUsers: users.map(this.mapUsers) };
      });
    }
  };

  formatPhoneNumber = str => {
    let cleaned = ("" + str).replace(/\D/g, "");
    let firstIndex = str.charAt(0);

    let match =
      firstIndex === "1"
        ? cleaned.substring(0, 11).match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
        : cleaned.substring(0, 10).match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      let intlCode = match[1] ? "+1 " : "";
      return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
    }
  };

  formatName = str => {
    let nameArray = str.split(" ");

    let filteredArray = nameArray.filter(str => {
      return !/\W/g.test(str) && str.length > 1;
    });

    let fullName = filteredArray.join(" ");
    return fullName;
  };

  mapUsers = user => {
    return (
      <SingleUser
        user={user}
        key={user.id}
        toggleButton={this.toggleButton}
        formatPhoneNumber={this.formatPhoneNumber}
        formatName={this.formatName}
        isDisplayed={user.isDisplayed}
      />
    );
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="mt-4">
            <div>{this.state.mappedUsers}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
