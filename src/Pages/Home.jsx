import { useDispatch, useSelector } from "react-redux"
import { Increment , Decrement} from "../Redux/CounterReducer";

const Home = () => {

  const Dispatch = useDispatch();
  const {counterReducer} = useSelector(state=>state);

  const handleIncrement = () => {
    Dispatch(Increment());
  }

  const handleDecrement = () => {
    Dispatch(Decrement());
  }

  return (
    <>
      <div className="mt-5 MainWrapper">
        <center>
          <h1>Home</h1>
          <p className="container mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam architecto culpa dolorem impedit ex illo quo porro optio quisquam veritatis provident at corrupti alias facere, suscipit debitis necessitatibus iure voluptatibus dolore assumenda consequuntur eveniet nemo accusamus! Omnis dicta neque eos harum asperiores tempore Totam</p>
          <button className="btn btn-success" onClick={handleIncrement}>Increment</button>
          <button className="btn btn-danger ms-2" onClick={handleDecrement}>Decrement</button>
          <h2 className="mt-4">{counterReducer.value}</h2>
        </center>
      </div>
    </>
  )
}

export default Home
