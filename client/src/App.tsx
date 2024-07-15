import React from "react";
import { TimeComponent } from "./components/datePicker";
import { DailyWindow } from "./components/organizer";

const App: React.FC = () => {
  return (
    <>
      <TimeComponent />
      <DailyWindow classname="lunch" />
    </>
  );
};

export default App;
