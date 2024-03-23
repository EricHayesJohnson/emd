import React, { useCallback, useState } from 'react';
import { DBTable, supabase } from '../../database/client';
import useSummaryPageData from '../../hooks/useSummaryPageData';
import { todayFormatForDb } from '../../utils/dateUtils';
import {
    Button,
    Form,
    FormLayout,
    InlineError,
    Select,
} from '@shopify/polaris';
import { Task } from '../../types';

const SubmitForm = () => {
    const { data, isLoading } = useSummaryPageData();
    const [task, setTask] = useState('');

    const id = data.lastRowId ? data.lastRowId + 1 : 0;
    const today = todayFormatForDb();
    const recordExists = data.isTodayInDb;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!recordExists) {
            const { error } = await supabase
                .from(DBTable.SUMMARY_PAGE)
                .insert([{ id, created_at: today, task }]);

            if (error) {
                console.error(error);
                alert('There was an issue submitting');
            } else {
                alert('Data updated successfully!');
                setTask('');
            }
        }
    };

    const handleSelectChange = useCallback(
        (value: string) => setTask(value),
        []
    );

    const options = Object.entries(Task).map(([key, value]) => {
        return {
            label: key,
            value,
        };
    });

    return (
        <Form onSubmit={handleSubmit}>
            <FormLayout>
                <Select
                    label="Select a task"
                    options={options}
                    onChange={handleSelectChange}
                    value={task}
                />
                <Button submit disabled={recordExists} loading={isLoading}>
                    Submit
                </Button>
                {recordExists && (
                    <InlineError
                        message="A record already exists for today"
                        fieldID="id"
                    />
                )}
            </FormLayout>
        </Form>
    );
};

export default SubmitForm;
