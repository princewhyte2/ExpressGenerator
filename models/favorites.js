const mongoose = require("mongoose");
require("mongoose-currency").loadType(mongoose);
const Schema = mongoose.Schema;

var favoriteSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true,
    },
    dishes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dish",
        unique: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

var Favorites = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorites;
