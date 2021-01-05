import { GRID, NUMBERS } from 'typings';

interface IInput {
  grid: GRID
  row: number
  value: NUMBERS
}

/**
 * // a function that returns true if the value is already being used in the row
 * @param param0 Object with 9x9 Sudoku grid, row indesx, and value
 */
function isInRow({ grid, row, value }: IInput): boolean{
  return grid[row].includes(value)
}

export default isInRow;
