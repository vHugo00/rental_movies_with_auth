import Movie from "../models/movie-model.js";

export const store = async (req, res) => {
  try {
    const content = await Movie.create(req.body);
    res.status(201).json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const content = await Movie.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const content = await Movie.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const content = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const content = await Movie.findByIdAndDelete(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const findRecomendation = async (req, res) => {
  const age = confirmAge(req.params.age);
  
  try {
    const content = await Movie.find({classification: age}).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

function confirmAge(age) {
  switch (age) {
    case "0":
      return "Livre";
    case "16":
      return "Maior16";
    case "18":
      return "Maior18";
    default:
      return 0;
  }
}
