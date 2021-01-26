function validSolution(sudoku){
 //Horizontal check
    function rowCheck(br) {
        for(var i = 0; i < br.length; i++) {
            for(var j = 1; j < br[i].length; j++) {
                if(br[i][j] != 0) {
                    if(br[i][j] === br[i][j-1]) return false;
                }
            }
        }
        return true;
    };
    //vertical check
    function colCheck(br){
        for(var i = 0; i < br.length; i++) {
            for(var j = 1; j < br[i].length; j++) {
                if(br[j][i] != 0) {
                    if(br[j][i] === br[j-1][i]) return false;
                }
            }
        }
        return true;
    };
  function diagonalCheck(br){
        var res = [];
        for(var i = 0; i < br.length; i++) {
            for(var j = 0; j < br[i].length; j++) {
                res.push(br[i][j]);
            }
        }
        res = res.sort(); // on touche pas au sudoku
        for(var k = 1; k < res.length; k++) {
            if(res[k] != 0) {
                if(res[k] === res[k-1]) return false;
            }
        }
        return true;

    }

      function brslice(row, column){
        var br = [];
        br.push([sudoku[row][column], sudoku[row][column+1], sudoku[row][column+2]]);
        br.push([sudoku[row+1][column], sudoku[row+1][column+1], sudoku[row+1][column+2]]);
        br.push([sudoku[row+2][column], sudoku[row+2][column+1], sudoku[row+2][column+2]]);
        return rowCheck(br) && colCheck(br) && diagonalCheck(br);
    }

  //toDo fonction  +3 pour gérer toute tailles
   return  brslice(0,0) && brslice(0,3) && brslice(0,6) && brslice(3,0) && brslice(3,3) && brslice(3,6) && brslice(6,0) && brslice(6,3) && brslice(6,6);

}
