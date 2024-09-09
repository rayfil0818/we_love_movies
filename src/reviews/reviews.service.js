const db = require("../db/connection");

function list() {
  return db("reviews").select("*");
}

function read(reviewId) {
  return db("reviews").select("*").where({ review_id: reviewId }).first();
}

function update(updatedReview) {
  return db("reviews")
    .where({ review_id: updatedReview.review_id })
    .update(updatedReview, "*")
    .then(() =>
      db("reviews as r")
        .join("critics as c", "r.critic_id", "c.critic_id")
        .select("r.*", "c.*")
        .where({ "r.review_id": updatedReview.review_id })
    )
    .then((updatedRecords) => {
      const updatedRecord = updatedRecords[0];
      const critic = {
        critic_id: updatedRecord.critic_id,
        preferred_name: updatedRecord.preferred_name,
        surname: updatedRecord.surname,
        organization_name: updatedRecord.organization_name,
      };
      updatedRecord.critic = critic;
      return updatedRecord;
    });
}

function destroy(reviewId) {
  return db("reviews").where({ review_id: reviewId }).del();
}

module.exports = {
  list,
  read,
  update,
  delete: destroy,
};
