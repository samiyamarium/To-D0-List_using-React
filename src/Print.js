 function PrintPage(){
    function handlePrint() {
        window.print()
    }
    return(
      <button onClick={handlePrint}> Print </button>
  //the onClick function is built into React to look for a click event!
    )
  }

  export default PrintPage