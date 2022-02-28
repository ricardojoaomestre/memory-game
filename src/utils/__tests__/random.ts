import {getNRandomItems} from '../random';
let mock:Array<number>;
beforeEach(() => {
    mock = [1,2,3,4,5];
})

describe('random function', () => {
    it('must return an empty array if the given argument is smaller or equal to 0', () => {
        expect(getNRandomItems(mock, 0)).toEqual([]);
    });
    it('must return the full original array if the given number is bigger or equal to its length', () => { 
        expect(getNRandomItems(mock, 10)).toEqual([1,2,3,4,5]);
    });
    it('must return an array with the given amount of random items', () => {
        expect(getNRandomItems(mock,2)).toHaveLength(2);
    });
});