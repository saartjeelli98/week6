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
            const x = new Deck();
            x.makeDeck(); //to call it
            expect(x.cards.length).to.equal(52);
        });
    });
});

