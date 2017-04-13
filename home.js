module.exports.index = function(req, res) {
    // res.render('index', { title: 'Index books' });
    res.render('index');
};

module.exports.books = function(req, res) {
    // res.render('books', { title: 'Books', });
    res.render('books');
};

module.exports.about = function (req, res) {
    // res.render('about', { title: 'About' });
    res.render('about');
};
