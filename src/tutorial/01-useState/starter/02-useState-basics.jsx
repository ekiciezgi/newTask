import { useState } from 'react'

const UseStateBasics = () => {
    const [count, setCount] = useState(0)

  return <>    
   <button type='button' style={{backgroundColor:'pink', width:'%100'}} onClick={()=> setCount(count+1)}>{count}</button>
</>;
};

export default UseStateBasics;
