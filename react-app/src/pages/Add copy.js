// import React, { Component } from "react";
// import axios from "axios";
// export class Add extends Component {
//   state = {
//     data: [],
//     gpu: [],
//     cpu: [],
//     motherBoard: [],
//     pcCase: "",
//     ram: "",
//     coolingSystem: "",
//     thermalCompound: "",
//     ssd: "",
//     os: "",
//     email: "",
//   };
//   BASE_API_URL = "http://localhost:3008/";

//   async componentDidMount() {
//     // const response = await axios.get(this.BASE_API_URL + "pc");
//     // console.log(response.data);
//     // this.setState({
//     //   data: response.data,
//     // });
//     const responseCpu = await axios.get(this.BASE_API_URL + "cpu");
//     console.log(responseCpu.data);
//     this.setState({
//       cpu: responseCpu.data,
//     });
//     const responseGpu = await axios.get(this.BASE_API_URL + "gpu");
//     console.log(responseGpu.data);
//     this.setState({
//       gpu: responseGpu.data,
//     });
//     const responseMotherBoard = await axios.get(
//       this.BASE_API_URL + "motherBoard"
//     );
//     console.log(responseMotherBoard.data);
//     this.setState({
//       motherBoard: responseMotherBoard.data,
//     });
//   }
//   addNew = async () => {
//     const response = await axios.post(this.BASE_API_URL + "pc", {
//       pcCase: this.state.pcCase,
//       ram: this.state.ram,
//       coolingSystem: this.state.coolingSystem,
//       thermalCompund: this.state.thermalCompound,
//       ssd: this.state.ssd,
//       os: this.state.os,
//       email: this.state.email,
//     });
//     console.log(response);

//     this.props.switchPage("DashBoard");
//   };
//   updateFormField = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   // addNew = async () => {
//   //   const newRecipe = {
//   //     title: this.state.newRecipeTitle,
//   //     ingredients: this.state.newRecipeIngredients.split(","),
//   //   };

//   //   const response = await axios.post(this.BASE_API_URL + "recipes", newRecipe);

//   //   newRecipe._id = response.data.insertedId;

//   //   const modified = [...this.state.data, newRecipe];

//   //   this.setState({
//   //     data: modified,
//   //     page: "list",
//   //   });
//   // };
//   render() {
//     return (
//       <React.Fragment>
//         <div
//           className="container p-3"
//           style={{ background: "#332a34", color: "green" }}
//         >
//           <div className="m-2">
//             <label className="m-2">PC Case:</label>
//             <input
//               className="form-control"
//               type="text"
//               value={this.state.pcCase}
//               onChange={this.updateFormField}
//               name="pcCase"
//             />
//           </div>
//           <div className="m-2">
//             <label className="m-2">Ram:</label>
//             <input
//               className="form-control"
//               type="text"
//               value={this.state.ram}
//               onChange={this.updateFormField}
//               name="ram"
//             />
//           </div>
//           <div className="m-2">
//             <label className="m-2">Cooling System:</label>
//             <input
//               className="form-control"
//               type="text"
//               value={this.state.coolingSystem}
//               onChange={this.updateFormField}
//               name="coolingSystem"
//             />
//           </div>
//           <div className="m-2">
//             <label className="m-2">Thermal Compound:</label>
//             <input
//               className="form-control"
//               type="text"
//               value={this.state.thermalCompound}
//               onChange={this.updateFormField}
//               name="thermalCompound"
//             />
//           </div>
//           <div className="m-2">
//             <label className="m-2">SSD:</label>
//             <input
//               className="form-control"
//               type="text"
//               value={this.state.ssd}
//               onChange={this.updateFormField}
//               name="ssd"
//             />
//           </div>
//           <div className="m-2">
//             <label className="m-2">Operating System:</label>
//             <input
//               className="form-control"
//               type="text"
//               value={this.state.os}
//               onChange={this.updateFormField}
//               name="os"
//             />
//           </div>
//           <div className="m-2">
//             <label className="m-2">Email:</label>
//             <input
//               className="form-control"
//               type="text"
//               value={this.state.email}
//               onChange={this.updateFormField}
//               name="email"
//             />
//           </div>
//           <div className="selectDropdown mt-4 pt-2">
//             <div className="mt-3">
//               <div className="m-2">
//                 <select class="form-select" aria-label="Default select example">
//                   <option selected>Select a CPU</option>
//                   {this.state.cpu.map((each) => (
//                     <option value={each._id}>
//                       {each.model}&nbsp; {each.cpuSocket}&nbsp;
//                       {each.cpuSpeed}
//                       GHZ&nbsp; Threads: {each.threads}&nbsp; Cores:{" "}
//                       {each.cores}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <div className="mt-3">
//               <div className="m-2">
//                 <select class="form-select" aria-label="Default select example">
//                   <option selected>Select a </option>
//                   {this.state.gpu.map((each) => (
//                     <option value={each._id}>
//                       {each.model}&nbsp;{each.cpuSocket}&nbsp;
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
<div className="mt-3">
  <div className="m-2">
    <select class="form-select" aria-label="Default select example">
      <option selected>Select a Mother Board</option>
      {this.state.motherBoard.map((each) => (
        <option value={each._id}>
          {each.chipsetType}&nbsp; {each.model}&nbsp;
        </option>
      ))}
    </select>
  </div>
</div>;
//             {/* <div className="mt-3">
//               <button className="mt-2 btn btn-primary" onClick={this.addNew}>
//                 Add New
//               </button>
//             </div> */}
//           </div>
//           <div className="mt-3">
//             <button className="mt-2 btn btn-primary" onClick={this.addNew}>
//               Add New
//             </button>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default Add;
