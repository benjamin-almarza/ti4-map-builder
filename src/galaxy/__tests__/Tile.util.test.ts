// import { getNeighbours, getCircle, changeOrder } from '../Tile.util';

describe('Tile.util ', () => {

  // it('getCircle', () => {
  //   [
  //     { input: 0, output: 0 },
  //     { input: 6, output: 1 },
  //     { input: 8, output: 2 },
  //     { input: 20, output: 3 },
  //     { input: 60, output: 4 },
  //   ].forEach(({input, output}) => {
  //     const actualOutput = getCircle(input)
  //     expect({ input, output: actualOutput}).toEqual({ input, output: output });
  //   })
  // })


  // it('changeOrder', () => {
  //   const arr = [1, 2, 3, 4, 5];

  //   [
  //     { input: { start: 0, desc: false }, output: [ 1, 2, 3, 4, 5 ] },
  //     { input: { start: 4, desc: false }, output: [ 5, 1, 2, 3, 4 ] },
  //     { input: { start: 5, desc: false }, output: [ 1, 2, 3, 4, 5 ] },
  //     { input: { start: 7, desc: false }, output: [ 3, 4, 5, 1, 2 ]},
  //     { input: { start: 0, desc: true }, output: [ 5, 4, 3, 2, 1 ] },
  //     { input: { start: 4, desc: true }, output: [ 4, 3, 2, 1, 5 ] },
  //   ].forEach(({input: { start, desc }, output}) => {
  //     const actualOutput = changeOrder({ arr, start, desc })
  //     expect({ start, desc, output: actualOutput}).toEqual({ start, desc, output: output });
  //   })
  // })

  // it('getNeighbours', () => {
  //   [
  //     { input: 0, output: [1, 2, 3, 4, 5, 6] },
      // { input: 1, output: [7, 8, 2, 0, 6, 18] },
      // { input: 2, output: [8, 9, 10, 3, 0, 1] },
      // { input: 3, output: [2, 10, 11, 12, 4, 0] },
      // { input: 4, output: [0, 3, 12, 13, 14, 5] },
      // { input: 5, output: [6, 0, 4, 14, 15, 16] },
      // { input: 6, output: [18, 1, 0, 5, 16, 17] },
      // { input: 7, output: [19, 20, 8, 1, 18, 36] },
      // { input: 8, output: [20, 21, 9, 2, 1, 7] },
      // { input: 9, output: [21, 22, 23, 10, 2, 8] },
      // { input: 10, output: [9, 23, 24, 11, 3, 2] },
      // { input: 11, output: [10, 24, 25, 26, 12, 3] },
      // { input: 12, output: [3, 11, 26, 27, 13, 4] },
      // { input: 13, output: [4, 12, 27, 28, 29, 14] },
      // { input: 14, output: [5, 4, 13, 29, 30, 15] },
      // { input: 15, output: [16, 5, 14, 30, 31, 32] },
      // { input: 16, output: [17, 6, 5, 15, 32, 33] },
      // { input: 17, output: [35, 18, 6, 16, 33, 34] },
      // { input: 18, output: [36, 7, 1, 6, 17, 35] },
      // { input: 19, output: [37, 38, 20, 7, 36, 60] },
      // { input: 20, output: [38, 39, 21, 8, 7, 19] },
      // { input: 21, output: [39, 40, 22, 9, 8, 20] },
      // { input: 22, output: [40, 41, 42, 23, 9, 21] },
      // { input: 23, output: [22, 42, 43, 24, 10, 9] },
      // { input: 24, output: [23, 43, 44, 25, 11, 10] },
      // { input: 25, output: [24, 44, 45, 46, 26, 11] },
      // { input: 26, output: [11, 25, 46, 47, 27, 12] },
      // { input: 27, output: [12, 26, 47, 48, 28, 13] },
      // { input: 28, output: [13, 27, 48, 49, 50, 29] },
      // { input: 29, output: [14, 13, 28, 50, 51, 30] },
      // { input: 30, output: [15, 14, 29, 51, 52, 31] },
      // { input: 31, output: [32, 15, 30, 52, 53, 54] },
      // { input: 32, output: [33, 16, 15, 31, 54, 55] },
      // { input: 33, output: [34, 17, 16, 32, 55, 56] },
      // { input: 34, output: [58, 35, 17, 33, 56, 57] },
      // { input: 35, output: [59, 36, 18, 17, 34, 58] },
      // { input: 36, output: [60, 19, 7, 18, 35, 59] },
      // { input: 37, output: [38, 19, 60] },
      // { input: 38, output: [39, 20, 19, 37] },
      // { input: 39, output: [40, 21, 20, 38] },
      // { input: 40, output: [41, 22, 21, 39] },
      // { input: 41, output: [42, 22, 40] },
      // { input: 42, output: [41, 43, 23, 22] },
      // { input: 43, output: [42, 44, 24, 23] },
      // { input: 44, output: [43, 45, 25, 24] },
      // { input: 45, output: [44, 46, 25] },
      // { input: 46, output: [25, 45, 47, 26] },
      // { input: 47, output: [26, 46, 48, 27] },
      // { input: 48, output: [27, 47, 49, 28] },
      // { input: 49, output: [28, 48, 50] },
      // { input: 50, output: [29, 28, 49, 51] },
      // { input: 51, output: [30, 29, 50, 52] },
      // { input: 52, output: [31, 30, 51, 53] },
      // { input: 53, output: [54, 31, 52] },
      // { input: 54, output: [55, 32, 31, 53] },
      // { input: 55, output: [56, 33, 32, 54] },
      // { input: 56, output: [57, 34, 33, 55] },
      // { input: 57, output: [58, 34, 56] },
      // { input: 58, output: [59, 35, 34, 57] },
      // { input: 59, output: [60, 36, 35, 58] },
      // { input: 60, output: [37, 19, 36, 59 ]}
    // ].forEach(({input, output}) => {
    //   const actualOutput = getNeighbours(input)
    //   expect({ input, output: actualOutput}).toEqual({ input, output: new Set(output) });
    // })
  // });
  // });

    // describe('getNeighbours', () => {
  //   let _func;
    
    // // for speed, this shouldn't be in a beforeEach, unless your test requires it.
    // jest.isolateModules(() => {
    //   process.env.VAR = true;
    //   _func = require('./locModule').func;
    // });
});
