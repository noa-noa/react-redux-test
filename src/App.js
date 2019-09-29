import React,{Component} from 'react';
// import PropTypes from 'prop-types';
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
const App = () => (<Counter></Counter>)

class Counter extends Component {
  // 初期化処理
  constructor(props){
    super(props)
    console.log(this.state)
    this.state = {count:0}
  }
  handlePlusButton = ()=>{
    console.log("handlePlusButton")
    const currentCount = this.state.count
    // set stateしたら自動的にrenderが呼ばれる
    this.setState({count: this.state.count+1})
  }
  handleMinusButton = () => {
    this.setState({count:this.state.count-1})
  }
  render(){
    console.log("render")
    return (
      <React.Fragment>    <div>count:{this.state.count}
    </div>
    <button onClick={this.handlePlusButton}>+1</button>
    <button onClick={this.handleMinusButton}>-1</button>
    </React.Fragment>

    )
  }
}
export default App;
　