/* GET home page. */
const index = (req, res) => {
  res.render('index', {title: 'Awesomeness'});
};

module.exports = {
  index
};