import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

const Label = styled.label`
    flex: 1;
    margin-right: 10px;
`;

const Input = styled.input`
    flex: 2;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    flex: 2;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #4b96e6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #3a75b5;
    }
`;

interface Event {
    id: string;
    calendarId: string;
    title: string;
    body: string;
    isAllday: boolean;
    start: string;
    end: string;
    goingDuration: number;
    comingDuration: number;
    location: string;
    attendees: string;
    category: string;
    dueDateClass: string;
    recurrenceRule: string;
    state: string;
    isVisible: boolean;
    isPending: boolean;
    isFocused: boolean;
    isReadOnly: boolean;
    isPrivate: boolean;
    color: string;
    backgroundColor: string;
    dragBackgroundColor: string;
    borderColor: string;
    customStyle: string;
    raw: {
        memo: string;
        hasToOrCc: boolean;
        hasRecurrenceRule: boolean;
    };
}

const Settings: React.FC = () => {
    const [event, setEvent] = useState<Event>({
        id: '',
        calendarId: '',
        title: '',
        body: '',
        isAllday: false,
        start: '',
        end: '',
        goingDuration: 0,
        comingDuration: 0,
        location: '',
        attendees: '',
        category: '',
        dueDateClass: '',
        recurrenceRule: '',
        state: '',
        isVisible: true,
        isPending: false,
        isFocused: false,
        isReadOnly: false,
        isPrivate: false,
        color: '',
        backgroundColor: '',
        dragBackgroundColor: '',
        borderColor: '',
        customStyle: '',
        raw: {
            memo: '',
            hasToOrCc: false,
            hasRecurrenceRule: false,
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
        setEvent((prevEvent) => ({
            ...prevEvent,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleRawChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
        setEvent((prevEvent) => ({
            ...prevEvent,
            raw: {
                ...prevEvent.raw,
                [name]: type === 'checkbox' ? checked : value,
            },
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(event); // You can replace this with your save logic
        alert('Event saved!');
    };

    // Define the input component type
    type ComponentType = React.ElementType;

    return (
        <Container>
            <h1>Event Settings</h1>
            <form onSubmit={handleSubmit}>
                {[
                    { label: 'ID', name: 'id', type: 'text' },
                    { label: 'Calendar ID', name: 'calendarId', type: 'text' },
                    { label: 'Title', name: 'title', type: 'text' },
                    { label: 'Body', name: 'body', type: 'text', component: TextArea as ComponentType },
                    { label: 'Start', name: 'start', type: 'datetime-local' },
                    { label: 'End', name: 'end', type: 'datetime-local' },
                    { label: 'Going Duration (minutes)', name: 'goingDuration', type: 'number' },
                    { label: 'Coming Duration (minutes)', name: 'comingDuration', type: 'number' },
                    { label: 'Location', name: 'location', type: 'text' },
                    { label: 'Attendees (comma separated)', name: 'attendees', type: 'text' },
                    { label: 'Category', name: 'category', type: 'text' },
                    { label: 'Due Date Class', name: 'dueDateClass', type: 'text' },
                    { label: 'Recurrence Rule', name: 'recurrenceRule', type: 'text' },
                    { label: 'State', name: 'state', type: 'text' },
                    { label: 'Color', name: 'color', type: 'color' },
                    { label: 'Background Color', name: 'backgroundColor', type: 'color' },
                    { label: 'Drag Background Color', name: 'dragBackgroundColor', type: 'color' },
                    { label: 'Border Color', name: 'borderColor', type: 'color' },
                    { label: 'Custom Style', name: 'customStyle', type: 'text', component: TextArea as ComponentType },
                    { label: 'Memo', name: 'memo', type: 'text', component: TextArea as ComponentType, raw: true },
                    { label: 'Has To or Cc', name: 'hasToOrCc', type: 'checkbox', raw: true },
                    { label: 'Has Recurrence Rule', name: 'hasRecurrenceRule', type: 'checkbox', raw: true },
                ].map(({ label, name, type, component: Component = Input as ComponentType, raw }) => (
                    <FormGroup key={name}>
                        <Label>{label}</Label>
                        <Component
                            name={name}
                            type={type}
                            value={raw ? (event.raw as any)[name] : event[name as keyof Event]}
                            checked={type === 'checkbox' ? (raw ? (event.raw as any)[name] : event[name as keyof Event]) : undefined}
                            onChange={raw ? handleRawChange : handleChange}
                        />
                    </FormGroup>
                ))}
                <Button type="submit">Save Event</Button>
            </form>
        </Container>
    );
};

export default Settings;
