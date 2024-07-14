import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const TimeComponent: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [weekOverview, setWeekOverview] = useState<Date[]>([]);

  useEffect(() => {
    const week: Date[] = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() + i);
      week.push(day);
    }
    setWeekOverview(week);
  }, []);

  return (
    <div>
      <p>{new Date().toDateString()}</p>
      <DatePicker
        selected={date}
        onChange={(newDate: Date | null) => {
          setDate(newDate ?? date);
        }}
      />
      <div>
        {weekOverview.map((day, key) => {
          return <p key={key}>{day.toDateString()}</p>;
        })}
      </div>
    </div>
  );
};
