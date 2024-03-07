import { useSelector } from "react-redux";


interface RootState {
    counter: {
      value: number;
    };
  }

  
export function Counter(){
    const counter = useSelector((state:RootState) => state.counter.value);
  
    return(
        <div>{counter}</div>
    )
}
