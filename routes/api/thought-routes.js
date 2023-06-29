const router = require("express").Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// Set up GET all and POST at /api/thoughts
router
.route("/")
.get(getAllThought)
.post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Set up POST and DELETE at /api/thoughts/:thoughtId/reflections/:reflectionId
router
.route("/:thoughtId/reactions")
.post(createReaction);

router.route("/:thoughtId/reactions/:reactionId")
.delete(deleteReaction);

module.exports = router;
