import Scheduling from "../models/rented-model.js";

export const store = async (req, res) => {
  try {
    const content = await Scheduling.create(req.body);
    res.status(201).json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const content = await Scheduling.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const content = await Scheduling.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const showComplete = async (req, res) => {
  try {
    const content = await Scheduling.findById(req.params.id)
      .populate({
        path: "rente_by", // Popula o campo do usuário
        model: "User", // Certifique-se de que 'User' é o nome correto do modelo
      })
      .populate({
        path: "movie_rented", // Popula o array de filmes
        model: "Movie", // Certifique-se de que 'Movie' é o nome correto do modelo
      })
      .exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const content = await Scheduling.findByIdAndUpdate(
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
    const content = await Scheduling.findByIdAndDelete(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};