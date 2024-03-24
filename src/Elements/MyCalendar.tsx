import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (value: any) => {
        setDate(value);
    };

    const getTileClassName = ({ date }: { date: Date }) => {
        if (date.getDay() === 0) {
            return 'bg-red-200';
        } else if (date.getDay() === 6) {
            return 'bg-blue-200';
        } else {
            return '';
        }
    };

    return (
        <div className="container mx-auto mt-8 flex flex-col">
            <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Calendar</h2>
            <div className="mx-auto bg-white p-4 rounded-lg shadow-md">
                <Calendar
                    onChange={onChange}
                    value={date}
                    className="border border-gray-300 rounded-lg p-2"
                    tileClassName={getTileClassName}
                />
            </div>
        </div>
    );
};

export default MyCalendar;
