<<<<<<< HEAD
import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

=======
import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";
>>>>>>> eef707e... Flip completed

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
<<<<<<< HEAD
  static defaultProps={
    nrows:5,
    ncols:5,
    chanceLightStartsOn:0.25
  }
=======
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25,
  };
>>>>>>> eef707e... Flip completed

  constructor(props) {
    super(props);
    // TODO: set initial state
<<<<<<< HEAD
    this.state={
      hasWon:false,
      board:this.createBoard()
    }
=======
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
>>>>>>> eef707e... Flip completed
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

<<<<<<< HEAD
  createBoard(){
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for(let i=0;i<this.props.nrows;i++){
      let row =[];
      //Iterate through columns and randomly assign true or false
      for(let j=0;j<this.props.ncols;j++){
=======
  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      //Iterate through columns and randomly assign true or false
      for (let j = 0; j < this.props.ncols; j++) {
>>>>>>> eef707e... Flip completed
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      //Push the row to the board
      board.push(row);
    }
<<<<<<< HEAD
    return board
=======
    return board;
>>>>>>> eef707e... Flip completed
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
<<<<<<< HEAD
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

=======
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
    console.log("Flipping", coord);
>>>>>>> eef707e... Flip completed

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

<<<<<<< HEAD
    // win when every cell is turned off
    // TODO: determine is the game has been won

    //this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {

=======
    flipCell(y, x);
    flipCell(y, x + 1);
    flipCell(y, x - 1);
    flipCell(y + 1, x);
    flipCell(y - 1, x);
    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = false;
    this.setState({ board, hasWon });
  }

  /** Render game board or winning message. */

  render() {
>>>>>>> eef707e... Flip completed
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board
<<<<<<< HEAD
    let tableBoard=[];
    for(let i=0;i<this.props.nrows;i++){
      let row=[];
      for(let j=0;j<this.props.ncols;j++){
        let coord=`${i}-${j}`
        row.push(<Cell key={coord} isLit={this.state.board[i][j]}/>)
=======
    let tableBoard = [];
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        let coord = `${i}-${j}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[i][j]}
            flipCellsAroundMe={() => {
              this.flipCellsAround(coord);
            }}
          />
        );
>>>>>>> eef707e... Flip completed
      }
      tableBoard.push(<tr key={i}>{row}</tr>);
    }
    // TODO
    return (
      <div className="Board">
        <table>
<<<<<<< HEAD
          <tbody>
            {tableBoard}
          </tbody>
=======
          <tbody>{tableBoard}</tbody>
>>>>>>> eef707e... Flip completed
        </table>
      </div>
    );
  }
}

<<<<<<< HEAD

=======
>>>>>>> eef707e... Flip completed
export default Board;
