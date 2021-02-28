import React, {useState} from "react";

function Sushi({sushi, plates, setPlates, budget, setBudget}) {
  const [eaten,setEaten] = useState(false)
  

  function handleClick(){
    if(sushi.price <= budget){
    setEaten(!eaten)
    setPlates([...plates,sushi])
    setBudget(budget-sushi.price)
    }
    else {
      alert("You got no money hunny")
    }
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
