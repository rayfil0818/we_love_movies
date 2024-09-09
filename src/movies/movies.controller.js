const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const service = require("./movies.service");

async function list(req, res, next) {
  const { is_showing } = req.query;
  const data = await service.list(is_showing === "true");
  res.json({ data });
}

async function movieExists(req, res, next) {
  const { movieId } = req.params;
  const movie = await service.read(movieId);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  return next({ status: 404, message: `Movie cannot be found.` });
}

async function listTheaterByMovie(req, res, next) {
  const { movieId } = req.params;
  const data = await service.listTheaterByMovie(movieId);
  res.json({ data });
}

async function listReviewsByMovie(req, res, next) {
  const { movieId } = req.params;
  console.log("Fetching reviews for movieId:", movieId); // Debugging line
  const data = await service.listReviewsByMovie(movieId);
  console.log("Reviews data:", data); // Debugging line
  res.json({ data });
}

async function read(req, res) {
  const { movieId } = req.params;
  const data = await service.read(movieId);
  res.json({ data });
}
async function create(req, res) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

async function update(req, res) {
  const data = await service.update(req.body.data);
  res.json({ data });
}

async function destroy(req, res) {
  const { review } = res.locals;
  await service.delete(review.review_id);
  res.sendStatus(204);
}

async function reviewExists(req, res, next) {
  const { reviewId } = req.params;
  const review = await service.read(reviewId);
  if (review) {
    res.locals.review = review;
    return next();
  }
  return next({ status: 404, message: `Review cannot be found.` });
}

module.exports = {
  listReviewsByMovie: asyncErrorBoundary(listReviewsByMovie),
  listTheaterByMovie: asyncErrorBoundary(listTheaterByMovie),
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), asyncErrorBoundary(read)],
  create: asyncErrorBoundary(create),
  update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)],
};
