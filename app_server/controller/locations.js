/*GET 'home' page */
module.exports.homelist = function(req, res) {
  res.render('location-list', { title: 'home' }); 
};

/*GET 'location info' page */
module.exports.locationInfo = function(req, res) {
  res.render('location-info', {title: 'location info' });
};

/*GET 'add review' page */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', {title: 'Add review'});
};