import React,{Component} from 'react';
import PropTypes from 'prop-types';
// function App() {
//   return (
//     <div><h1>Hello World</h1></div>
//   );
// }
// class App extends Component{
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked")}}/>
//       </React.Fragment>
//     )
//   }
// }
const App = () =>{
  const profiles = [
    {name:"Taro", age:10},
    {name: "Hanako",age:5},
    {name:1}
  ]
  return (<div>
    {
      profiles.map((profile,index) => {
        return <User name={profile.name} age={profile.age} key={index}></User>
      })
    }
  </div>
    )
}
const User = (props) => {
  return <div>Hi! {props.name} {props.age}</div>
}
const Cat = () =>{
  return <div>Meow!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
　