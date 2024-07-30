import React, { useState } from "react";

export const DailyWindow: React.FC<ComponentProps> = ({ classname }) => {
  const [bestubetsu, setBestubestu] = useState<boolean>(false);

  const handleClick = () => {
    setBestubestu(!bestubetsu);
  };

  return (
    <div className={classname}>
      <p>{classname}</p>
      <p>Eating Together: {bestubetsu.toString()} </p>
      <button onClick={handleClick}>
        {bestubetsu ? "Eat betsubestu" : "Eat together"}
      </button>
    </div>
  );
};
