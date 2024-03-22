export const formatDate = (dateString?: string) => {
    if (dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            timeZone: 'UTC',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    }
};

export const todayFormatForDb = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};
