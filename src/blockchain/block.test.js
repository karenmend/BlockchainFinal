import Block from './block';

describe('Block', () => {
    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date(2010, 0 , 1);
        previousBlock = Block.genesis;
        data = 'transaction0';
        hash = 'hash0';
    });

    it('Crear instacia con parametros', () => {
        const block = new Block(timestamp, previousBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);

    });

    it('Usando static mine', () =>{
        const block = Block.mine(previousBlock, data);


        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);
    });

    it('Usando static hash', () => {
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hashOutput = "584b01f4584d46e3cefd05d1e500c0b1a1c37c0bd066db4248f886cb734939c3";

        expect(hash).toEqual(hashOutput);
    });

    it('Usando tostring', () => {
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');
    })
});