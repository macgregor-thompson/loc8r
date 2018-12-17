/*  GET 'home' page  */
const homeList = (req, res) => {
  res.render('locations-list', {title: 'Home' });
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {
  res.render('location-info', {title: 'Location info'});
};

/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('location-review-form', {title: 'Add review'});
};

module.exports = {
  homeList,
  locationInfo,
  addReview
};