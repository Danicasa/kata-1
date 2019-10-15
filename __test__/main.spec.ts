import { Main } from '../src/main';
import { expect } from 'chai';

describe('Main', () => {
  
  describe('removeRepetitions for only one repetition', () => {

    it('should return an empty array when input is empty array', async () => {
      const input: number[] = [];
      const expectedResult: number[] = [];

      const result = Main.removeRepetitionsForFirstApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });

    it('should return an empty array when input is array with length 1', async () => {
      const input: number[] = [2];
      const expectedResult: number[] = [];

      const result = Main.removeRepetitionsForFirstApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });

    it('should return an empty array when input is array with length 2 with no repetitions', async () => {
      const input: number[] = [1, 2];
      const expectedResult: number[] = [];

      const result = Main.removeRepetitionsForFirstApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });

    it('should return an empty array when input is array with length 2 with repetitions', async () => {
      const input: number[] = [2, 2];
      const expectedResult: number[] = [2];

      const result = Main.removeRepetitionsForFirstApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });


    it('should return an empty array when no repetitions', async () => {
      const input: number[] = [1, 2, 3, 4];
      const expectedResult: number[] = [];

      const result = Main.removeRepetitionsForFirstApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });

    it('should return an array with 2 repeated numbers in order [3, 2]', async () => {
      const input: number[] = [2, 3, 3, 2];
      const expectedResult: number[] = [3, 2];

      const result = Main.removeRepetitionsForFirstApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });

    it('should return an array with 2 repeated numbers in order [2, 3]', async () => {
      const input: number[] = [3, 2, 2, 3];
      const expectedResult: number[] = [2, 3];

      const result = Main.removeRepetitionsForFirstApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });

    it('should return an array with 2 repeated numbers in order [1, 9]', async () => {
      const input: number[] = [9, 1, 1, 3, 9, 1];
      const expectedResult: number[] = [1, 9];

      const result = Main.removeRepetitionsForFirstApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });
  });


  describe('removeRepetitions for only two repetition', () => {

    it('should return an empty array when input is empty array', async () => {
      const input: number[] = [];
      const expectedResult: number[] = [];

      const result = Main.removeRepetitionsForSecondApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });

    it('should return an empty array when input is array with length 1', async () => {
      const input: number[] = [2];
      const expectedResult: number[] = [];

      const result = Main.removeRepetitionsForSecondApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });

    it('should return an empty array when input is array with length 2 with no repetitions', async () => {
      const input: number[] = [1, 2];
      const expectedResult: number[] = [];

      const result = Main.removeRepetitionsForSecondApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });

    it('should return an empty array when input is array with length 2 with repetitions', async () => {
      const input: number[] = [2, 2];
      const expectedResult: number[] = [2];

      const result = Main.removeRepetitionsForSecondApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });


    it('should return an empty array when no repetitions', async () => {
      const input: number[] = [1, 2, 3, 4];
      const expectedResult: number[] = [];

      const result = Main.removeRepetitionsForSecondApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });

    it('should return an array with 2 repeated numbers in order [3, 2]', async () => {
      const input: number[] = [2, 3, 3, 2];
      const expectedResult: number[] = [3, 2];

      const result = Main.removeRepetitionsForSecondApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });

    it('should return an array with 2 repeated numbers in order [2, 3]', async () => {
      const input: number[] = [3, 2, 2, 3];
      const expectedResult: number[] = [2, 3];

      const result = Main.removeRepetitionsForSecondApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });

    it('should return an array with 2 repeated numbers in order [1, 9, 1]', async () => {
      const input: number[] = [9, 1, 1, 3, 9, 1, 1];
      const expectedResult: number[] = [1, 9, 1];

      const result = Main.removeRepetitionsForSecondApproach(input);

      expect(result).to.be.deep.equal(expectedResult);
    });
  });
});