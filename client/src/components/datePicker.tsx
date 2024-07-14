import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const TimeComponent: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <div>
      <p>{new Date().toString()}</p>
      <DatePicker
        selected={date}
        onChange={(newDate: Date | null) => {
          setDate(newDate ?? date);
        }}
      />
    </div>
  );
};
