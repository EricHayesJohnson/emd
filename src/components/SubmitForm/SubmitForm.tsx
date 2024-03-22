import React, { useState } from 'react';
import { DBTable, supabase } from '../../database/client';
import useSummaryPageData from '../../hooks/useSummaryPageData';
import { todayFormatForDb } from '../../utils/dateUtils';

const SubmitForm = () => {
    const { data } = useSummaryPageData();
    const [task, setTask] = useState('');

    const id = data.lastRowId ? +data.lastRowId + 1 : 0;
    const today = todayFormatForDb();
    const recordExists = data.isTodayInDb;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!recordExists) {
            const { data, error } = await supabase
                .from(DBTable.SUMMARY_PAGE)
                .insert([{ id, created_at: today, task }]);

            if (error) {
                console.error(error);
            } else {
                console.log(data);
                alert('Data updated successfully!');
                setTask('');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter data"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SubmitForm;
