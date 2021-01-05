import { GRID, NUMBERS } from 'typings';
import { isInCol, isInRow, shuffle } from 'utils';

const gridExample: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * A backtracking/recursive function to check all the possible combinations of values until a solution is found
 * @param grid
 */
function fillGrid(grid: GRID) {
  let row = 0;
  let col = 0;

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i/9);
    col = i % 9;
  }

  if (grid[row][col] === 0) {
    shuffle(numbers);

    for (let value of numbers) {
      if (!isInRow({ grid, row, value })) {
        if (!isInCol({ col, grid, value})) {
          // is it not in the grid square?
          // ......... if this is the case

          //...
          grid[row][col] = value;
          // check if grid is full, if yes stop and return
          // otherwise run fillGrid(grid) again
        }

      }

      break;
    }
  }

  grid[row][col] = 0;
}

export default fillGrid;
