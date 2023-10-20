import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingData } from "../redux/message/messageSlice";

const Greetings = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.greetings.status === 'loading');

  useEffect(() => {
    dispatch(fetchGreetingData());
  }, [dispatch]);

  const greeting = useSelector((state) => state.greetings.greeting);
  console.log('my greet', greeting)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Random Greetings</h1>
      <h4>Reload to get a new greeting</h4>
      <div>{greeting}</div>
    </div>
  );
};

export default Greetings;
