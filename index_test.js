var expect = chai.expect;

describe('deal cards', function() {
    describe('#makeDeck', function() {
        it('should make a deck of cards', function(){
            const x = new makeDeck();
            expect(x).to.equal.length(52);
        });
    });
});