// import React from 'react';
// import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.css'



// function minitable() {
//   const collums = ['#', 'Name', 'Email'].map((d) => { return (<th>{d}</th>) });
//   const data =
//     [['1', 'Irsad', 'irsad@gmil.com'],
//     ['2', 'agung', 'agung@gmil.com'],
//     ['3', 'Angga', 'Angga@gmil.com'],
//     ['4', 'fadil', 'fadil@gmil.com']  
//     ];
//   const colls = [];
//   for (let row of data) {
//     colls.push(row.map((d) => { return (<td>{d}</td>) }));
//   }
//   const rows = colls.map((d) => { return (<tr>{d}</tr>) })


//   return (
//     <div>
//       <Table striped bordered hover variant="dark">
//         <thead>
//           <tr>
//             {collums}
//           </tr>
//         </thead>
//         <tbody>
//           {rows}
//         </tbody>
//       </Table>
//     </div>
//   )
// }
// /* function App() {
//   const users = [["1", "1", "1"], ["2", "2", "2"]];
//   const final = [];
//   for (let user of users) {
//     final.push(<li key={user}>{user}</li>);
//   }
//   return (
//     <div className="App">
//       <ul>{final}</ul>
//     </div>
//   );
// } */

// export { minitable };
// class minitable {
//   constructor(init) {
//     this.init = init;
//     console.log(init);
//   }

//   createHeader(data) {
//     let open = "<thead><tr>";
//     let close = "</tr></thead>";
//     data.forEach((d) => {
//       open += `<th>${d}</th>`;
//     });

//     return open + close;
//   }

//   createBody(data) {
//     let open = "<tbody>";
//     let close = "</tbody>";

//     data.forEach((d) => {
//       open += `
//         <tr>
//           <td>${d[0]}</td>
//           <td>${d[1]}</td>
//         </tr>
//       `;
//     });

//     return open + close;
//   }

//   render(element) {
//     let table =
//       "<table class='table table-hover'>" +
//       this.createHeader(this.init.columns) +
//       this.createBody(this.init.data) +
//       "</table>";
//     element.innerHTML = table;
//   }
// }

// export {minitable};
