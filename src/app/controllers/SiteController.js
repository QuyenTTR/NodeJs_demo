class SiteController {

    index(req, res) {
        res.render('home');
    }

    search(req, res) {
        res.render('search');
    }

    helloWorld(req, res) {
        res.send('Hello World!');
    }

}

module.exports = new SiteController;