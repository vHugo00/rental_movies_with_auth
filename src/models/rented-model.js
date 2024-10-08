import db from "../config/db.js";
const now = new Date();

const rentedSchema = new db.Schema({
    movie_rented: {
      type: db.Schema.Types.ObjectId,
      ref: 'Movie',
      required: true,
    },
    rente_by: {
      type: db.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rent_date: {
      type: Date,
      default: now,
    },
    return_date: {
      type: Date,
      required: true,
    },
  });

const Rented = db.model("Rented", rentedSchema);

export default Rented;