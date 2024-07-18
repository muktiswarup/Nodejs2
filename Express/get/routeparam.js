const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

// Read the movies data from the JSON file
let movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

//ROUTE HANDLER FUNCTION
const getAllMovies = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      movies,
    },
  });
};

const getMovieThroughId = (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return res.status(404).json({
      status: "fail",
      message: "Movie not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      movie,
    },
  });
};

const createMovie = (req, res) => {
  const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;

  // Create a new movie object with the new ID
  const newMovie = Object.assign({ id: newId }, req.body);

  // Add the new movie to the movies array
  movies.push(newMovie);

  // Write the updated movies array to the JSON file
  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
    if (err) {
      console.error("Error writing to movies.json:", err);
      return res.status(404).json({
        status: "error",
        message: "Failed to save the movie",
      });
    }

    // Respond with the newly created movie
    res.status(201).json({
      status: "success",
      data: {
        movie: newMovie,
      },
    });
  });
};

const updateMovie = (req, res) => {
  let id = req.params.id * 1;
  let moviesToUpdate = movies.find((element) => element.id === id);
  if (!moviesToUpdate) {
    return res.status(404).json({
      status: "fail",
      message: "No movie object with id:" + id,
    });
  }
  let index = movies.indexOf(moviesToUpdate);
  Object.assign(moviesToUpdate, req.body);
  movies[index] = moviesToUpdate;
  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {});

  res.status(200).json({
    status: "Success",
    data: {
      movie: moviesToUpdate,
    },
  });
};

const deleteMovie = (req, res) => {
  let id = req.params.id * 1;
  let moviesToDelete = movies.find((element) => element.id === id);
  if (!moviesToDelete) {
    return res.status(404).json({
      status: "failed",
      message: "No movie object with id:" + id + "to delete",
    });
  }
  let index = movies.indexOf(moviesToDelete);
  movies.splice(index, 1);
  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {});

  res.status(200).json({
    status: "Success",
    data: {
      movie: null,
    },
  });
};

// GET endpoint to fetch all movies
app.get("/api/movies", getAllMovies);

// GET endpoint to fetch a movie by ID
app.get("/api/movies/:id", getMovieThroughId);

// POST endpoint to add a new movie
app.post("/api/movies", createMovie);

//PATCH endpoint to update a movie
app.patch("/api/movies/:id", updateMovie);

//DELETE end point to delete a movie
app.delete("/api/movies/:id", deleteMovie);

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
