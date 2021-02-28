import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({api, plates, setPlates, budget, setBudget}) {
  const [sushi, setSushi] = useState([])
  const [sliceIndex,setSliceIndex] = useState(0)
  
  useEffect(() => {
    fetch (api)
    .then((r) => r.json())
    .then(setSushi);
  }, [])
  
    function handleButtonClick(){
      setSliceIndex(sliceIndex + 4)
      
    }

  const slicedSushi = sushi.slice(sliceIndex, sliceIndex+4)



  const sushiArray = slicedSushi.map((sushi)=>{
    return <Sushi 
    plates={plates} 
    setPlates={setPlates}
      key={sushi.id}
      sushi={sushi}
      budget={budget} 
      setBudget={setBudget}
    />
  })

  
  
  return (
    <div className="belt">
      {sushiArray}
      <MoreButton onButtonClick={handleButtonClick} />
    </div>
  );
}

export default SushiContainer;
