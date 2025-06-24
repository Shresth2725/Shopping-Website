import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>

        <p className="text-lg text-gray-600 mb-6">
          Welcome to <span className="font-semibold text-blue-600">Foodie Town</span>, a
          learning playground for mastering modern frontend development. We explore React
          concepts through real projects, hands-on coding, and a community-driven approach.
        </p>

        <p className="text-lg text-gray-600 mb-6">
          This platform is dedicated to developers who are passionate about building clean,
          reusable, and scalable web applications. Whether you're a beginner or an experienced
          dev, we aim to make React intuitive and fun for everyone.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-10 shadow-inner">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To simplify React learning by creating interactive tutorials and practical examples
            that developers can relate to. We strongly believe in learning by doing!
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Meet the Contributors</h2>
          <p className="text-gray-600 mb-4">
            Our platform is shaped by passionate learners and builders who contribute ideas,
            code, and support to fellow developers.
          </p>

          <div className="space-y-6">
            <User name={"Shresth"} location={"Mirzapur"} contact={"7309692044"}/>
            {/* <User name={"Priyanka"} /> */}
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          &copy; 2025 Foodie Town. Crafted with ❤️ for developers.
        </div>
      </div>
    );
  }
}

export default About;
