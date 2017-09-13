var router = express.Router();
var fs = require('fs');

var signupMustache = fs.readFileSync(mustachePath + 'signup.mustache').toString();

router.get('/signup', function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text.html'
    });
    renderWithPartial(signupMustache, request, response);
});

module.exports = router;