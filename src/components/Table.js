import React from "react";

function Table({ plates = [], budget, setBudget }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div className="empty-plate" key={_.id} style={{ top: -7 * index }} />
  ));

  function addMoney(e){
    e.preventDefault()
  console.log(e.target[0].value)
    setBudget(budget + parseInt(e.target[0].value))
    e.target.value=""
  }
    
  return (
    <>
      <h1 className="remaining">
        You have: ${budget} remaining!
      </h1>
      <div className="table">
      <form onSubmit={((e) => addMoney(e))}>
        <input type="number"  className="moneyform" placeholder="Add Money Here"></input>
        <input type="submit" value="$$$"></input>
      </form>
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
