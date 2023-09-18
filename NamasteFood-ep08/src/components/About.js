import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent componentDidMount");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is NR ABOUT page.</h2>

        <UserClass name="First" location="Dehradun Class" />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is NR ABOUT page.</h2>
//       {/* <User name={"Akshay function"} /> */}
//       <UserClass name="Akshay class" location="Dehradun Class" />
//     </div>
//   );
// };
export default About;

/*
IF 2 CHILD ARE CALLED FROM PARENT COMPONENT
-Parent Constructor
-Parent Render

   It will batch the render phase for multiple children.

   -First Constructor
   -First Render

   -Second Constructor
   -Second Render

    Render phase completed. It now batch the commit phase.
    <DOM MANIPULATION STARTS>
   -First componentDidMount
   -Second componentDidMount

-Parent componentDidMount
*/
//Once the commit phase starts, React tries to update the DOM,
//DOM manipulation is a costly operation.
//When React tries to update the DOM, it says that let me find out all the children , batch the render phase , then the commit phase happens.
