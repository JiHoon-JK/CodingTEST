export class Matrix {
  constructor(matrix) {
    this.matrixArray = matrix.split('\n').map((array) => array.split(" ").map((array) => parseInt(array)));
  }

  get rows() {
    return this.matrixArray;
  }

  get columns() {
    this.columnArray = this.matrixArray[0].map((col,index) => this.matrixArray.map((row) => row[index]));
    return columnArray;
  }
}