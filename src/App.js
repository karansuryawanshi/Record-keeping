import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
// import Fields from "./components/Fields";
import DeleteIcon from "@mui/icons-material/Delete";
// import { Phone, Warning } from "@mui/icons-material";
// import Home from "./Home";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email, Phone }]);
    setName("");
    setEmail("");
    setPhone("");
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  function Window(event) {
    if (event.key === "Enter") {
      addData();
    }
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            label="Name"
            variant="outlined"
          />

          <TextField
            // onCopy={Window}
            // onKeyPress={Window}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="E-mail"
            variant="outlined"
          />
          <TextField
            value={Phone}
            onChange={(event) => setPhone(event.target.value)}
            label="Phone"
            variant="outlined"
          />

          <Button onClick={addData} variant="outlined">
            <AddIcon></AddIcon>
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>email</h4>
          <h4>Phone</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <h4>{element.Phone}</h4>
              <Stack>
                <Button
                  onClick={() => removeItem(index)}
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import "./MovieList.css";

// function MovieList() {
//   const [movies, setMovies] = useState([
//     {
//       title: "Russian",
//       director: "Vladimir Putin",
//       image1:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3lV_vgx8ScN-1GttmSyq5ZMmFt4Q1SUaAw&usqp=CAU",
//     },
//     {
//       title: "Korean",
//       director: "Kim Jong",
//       image2:
//         "https://cdn.pixabay.com/photo/2021/04/16/06/46/bikini-6182731_960_720.jpg",
//     },
//     {
//       title: "American",
//       director: "joe Biden",
//       image3:
//         "https://media.gq.com/photos/559a91b42ca275951298829e/master/w_1600%2Cc_limit/charlotte-mckinney-04.jpg",
//     },
//     {
//       title: "khello",
//       director: "Pappya",
//       image4:
//         "https://images.unsplash.com/photo-1506795660198-e95c77602129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//     },
//   ]);

//   return (
//     <div>
//       <div className="head">
//         <h1 className="heading">BpYa 69</h1>
//         <img
//           className="sym"
//           src="https://is2-ssl.mzstatic.com/image/thumb/Music111/v4/cc/b3/97/ccb397e8-8317-ab8d-c5fc-e558dce49062/cover.jpg/400x400cc.jpg"
//           alt=""
//         />
//       </div>
//       <ul className="movie-list">
//         {movies.map((movie, index) => (
//           <li key={index} className="movie-item">
//             <a href="">
//               <img src={movie.image1} className="img1" />
//             </a>
//             <img src={movie.image2} className="img2" />
//             <img src={movie.image3} className="img3" />
//             <img src={movie.image4} className="img4" />
//             <h2>{movie.title}</h2>
//             <p className="ins">Inspired by {movie.director}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MovieList;
