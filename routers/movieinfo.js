const express = require("express");
const router = new express.Router();

const MovieInfo = require("../models/movies");

router.post("/movie", async (req, res) => {
  try {
    const addingMoviesRecords = new MovieInfo(req.body);
    console.log(req.body);
    const insertMovies = await addingMoviesRecords.save();
    res.status(201).send(insertMovies);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/movie", async (req, res) => {
  try {
    const getMovies = await MovieInfo.find({}).sort({ ranking: 1 });
    res.send(getMovies);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/movie/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMovie = await MovieInfo.findById({ _id });
    res.send(getMovie);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/movie/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMovie = await MovieInfo.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMovie);
  } catch (e) {
    res.status(500).send(e);
    console.log(e)
  }
});

router.delete("/movie/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMovie = await MovieInfo.findByIdAndDelete(_id);
    res.send(getMovie);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
