import React, { useMemo, useState } from 'react';
import { DBTable, supabase } from '../../database/client';
import useSummaryPageData from '../../hooks/useSummaryPageData';
import { todayFormatForDb } from '../../utils/dateUtils';
import { Task } from '../../types';
import {
    Button,
    Form,
    FormLayout,
    InlineError,
    Select,
} from '@shopify/polaris';
import { isNumber } from '../../utils/numberUtils';

const SubmitForm = () => {
    const { data, isLoading } = useSummaryPageData();
    const [task, setTask] = useState<Task>(Task.PROJECTS);

    const { lastRowId, isTodayInDb: recordExists } = data || {};
    const id = lastRowId ? lastRowId + 1 : undefined;
    const today = todayFormatForDb();

    const options = useMemo(
        () =>
            Object.entries(Task).map(([key, value]) => ({
                label: key,
                value,
            })),
        []
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!recordExists && isNumber(id)) {
            const { error } = await supabase
                .from(DBTable.SUMMARY_PAGE)
                .insert([{ id, created_at: today, task }]);

            if (error) {
                console.error(error);
                alert('There was an issue submitting task');
            } else {
                window.location.reload(); // Refresh the page to reset default and confirms success
            }
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div style={{ margin: '16px' }}>
                <FormLayout>
                    <Select
                        label="Select task"
                        options={options}
                        onChange={(value: Task) => setTask(value)}
                        value={task}
                        disabled={isLoading || !!recordExists}
                    />
                    <Button
                        submit
                        disabled={!!recordExists}
                        loading={isLoading}
                    >
                        Submit
                    </Button>
                    {!!recordExists && (
                        <InlineError
                            message="A record already exists for today"
                            fieldID="field-id"
                        />
                    )}
                </FormLayout>
            </div>
        </Form>
    );
};

export default SubmitForm;
