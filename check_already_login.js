module.exports = function (req, res, next) {
    if (req.session.user != undefined) {
        res.redirect('/mywall')
    } else {
        next()
    }
}