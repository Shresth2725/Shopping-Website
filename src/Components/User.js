import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + " Child Constructor");
  }

  componentDidMount() {
    // console.log(this.props.name + " Child component did mount");
  }

  render() {
    const { name , location , contact } = this.props;

    // console.log(this.props.name + " Child Render");

    return (
      <div className="bg-white shadow-md rounded-xl p-6 w-full sm:w-96 mx-auto text-gray-800">
        <h2 className="text-xl font-semibold mb-2">Name: {name}</h2>
        <h2 className="text-md mb-1">Location: {location}</h2>
        <h2 className="text-md">Contact: {contact}</h2>
      </div>
    );
  }
}

export default User;
