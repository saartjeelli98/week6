var expect = chai.expect;


// describe('make deck', function(){
//     describe('#madeDeck', function(){
//         it ('shouldmake a deck of cards', function(){
//             const x = new Deck();
//             expect(x).to.equal.length(52);
//         })
//     })
// })


describe('make cards', function() {
    describe('#makeDeck', function() {
        it('should make a deck of cards', function(){
            const x = new Cards();
            expect(x).to.equal(52);
        });
    });
});

