import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingData } from "../redux/message/messageSlice";

const Greetings = () => {
  const greetings = useSelector((state) => state.greeting.greetings); // Updated to state.greeting.greetings
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.greeting.status === 'loading'); // Updated to check status

  useEffect(() => {
    dispatch(fetchGreetingData());
  }, [dispatch]);

  if (isLoading) { 
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Random Greeting</h1>
      <h4>Reload to get a new greeting</h4>
      <h5>{greetings}</h5>
    </div>
  );
};

export default Greetings;
