/**
 * Main Class
 */

// KATA FOR
// [2,3,3,2,3,3]
//
//   [2]
//
//   [3, 2]

export class Main {
  static removeRepetitionsForFirstApproach(input: number[]): number[] {
    if (input.length < 2) {
      return [];
    }
    return this.approachOne(input);
  }

  static removeRepetitionsForSecondApproach(input: number[]): number[] {
    if (input.length < 2) {
      return [];
    }
    return this.approachTwo(input);
  }

  static approachTwo(input: number[]): number[] {
    const result: number[] = [];
    const visitedItems: number[] = [];

    input.forEach(number => {
      if (visitedItems.indexOf(number) === -1) {
        visitedItems.push(number);
      } else {
        result.push(number);
        visitedItems.splice(number);
      }
    });

    return result;
  }

  static approachOne(input: number[]): number[] {
    const result: number[] = [];
    const visitedItems: number[] = [];

    input.forEach(number => {
      /*if (visitedItems.includes(number)) {
        visitedItems.push(number);
      } else if(result.includes(number)) {
        result.push(number);
      }*/

      if (visitedItems.indexOf(number) === -1) {
        visitedItems.push(number);
      } else if (result.indexOf(number) === -1) {
        result.push(number);
      }
    });

    return result;
  }
}
