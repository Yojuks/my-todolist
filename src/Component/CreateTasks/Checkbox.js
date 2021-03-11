// import React from "react";

// class Checkbox extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             checked:true
//         }
//         this.handleCheck=this.handleCheck.bind(this)
//     }
    
//     handleCheck(){
//         this.setState({
//             checked:!this.state.checked
//         })
//     }
    
//     render(){
//         var msg=" "
//         if(this.state.checked){
//             msg="checked!"
//         }else{
//             msg="not checked!"
//         }
//         return(
//             <div>
//                 <input type="checkbox" 
//                 onChange={this.handleCheck}
//                 defaultChecked={this.state.checked}
//                 />
//                 <p>this box is {msg}</p>
//             </div>
//         )
//     }
//     }

//     export default Checkbox;