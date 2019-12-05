import React,{Component} from 'react';
import ReactDom from 'react-dom';
import './Demo.css';
//functional based architecture use only props
const Demo = ({name}) =>{
        return  <div className= "maindiv_style" >
        <h1> hello world {name} </h1>
        <p>Hello paragraph in the link</p>
        </div>
}

//component based architecture use only this.props
// class Demo extends Component{
// render()
// {
//         return  <div className= "maindiv_style" >
//                 <h1> hello world {this.props.name} </h1>
//                 <p>Hello paragraph in the link</p>
//                 </div>
// }

// }
export default Demo;