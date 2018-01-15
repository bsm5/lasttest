var chai = require('chai');
var assert = chai.assert;

//Describe is used to group individual test!
describe('Hello', function () {
    it('Should return Hello', function(){
        var word = 'Hello';

        assert.equal(word, 'Hello', 'word should be Herro');
    });
});