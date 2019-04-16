import React, { useState } from "react";

const HelloWorld = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

// Works ✅
// export default props => <HelloWorld {...props} />;

// Fails 🔴
export default HelloWorld;
