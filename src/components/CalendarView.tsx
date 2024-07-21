import React, { useRef, useEffect, useState } from 'react';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.button`
    padding: 8px 16px;
    background-color: #4b96e6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #3a75b5;
    }
`;

const CalendarContainer = styled.div`
    flex-grow: 1;
`;

type ViewType = 'month' | 'week' | 'day';

const CalendarView: React.FC = () => {
    const calendarRef = useRef<Calendar>(null);
    const [view, setView] = useState<ViewType>('month');
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const calendarInstance = calendarRef.current?.getInstance();
        if (calendarInstance) {
            calendarInstance.setDate(currentDate);
            calendarInstance.changeView(view);
        }
    }, [view, currentDate]);

    const handleClickToday = () => {
        setCurrentDate(new Date());
    };

    const handleClickPrev = () => {
        const newDate = new Date(currentDate);
        if (view === 'month') {
            newDate.setMonth(newDate.getMonth() - 1);
        } else {
            newDate.setDate(newDate.getDate() - 7);
        }
        setCurrentDate(newDate);
    };

    const handleClickNext = () => {
        const newDate = new Date(currentDate);
        if (view === 'month') {
            newDate.setMonth(newDate.getMonth() + 1);
        } else {
            newDate.setDate(newDate.getDate() + 7);
        }
        setCurrentDate(newDate);
    };

    const handleChangeView = (newView: ViewType) => {
        setView(newView);
    };

    return (
        <Container>
            <Header>
                <ButtonGroup>
                    <Button onClick={handleClickToday}>Today</Button>
                    <Button onClick={handleClickPrev}>Prev</Button>
                    <Button onClick={handleClickNext}>Next</Button>
                </ButtonGroup>
                <h2>{currentDate.toLocaleDateString()}</h2>
                <ButtonGroup>
                    <Button onClick={() => handleChangeView('month')}>Month</Button>
                    <Button onClick={() => handleChangeView('week')}>Week</Button>
                    <Button onClick={() => handleChangeView('day')}>Day</Button>
                </ButtonGroup>
            </Header>
            <CalendarContainer>
                <Calendar
                    ref={calendarRef}
                    height="100%"
                    view={view}
                    useDetailPopup={true}
                    useFormPopup={true}
                    week={{
                        startDayOfWeek: 0,
                        dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                        narrowWeekend: true,
                        workweek: false,
                    }}
                    month={{
                        startDayOfWeek: 0,
                        dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                        narrowWeekend: true,
                    }}
                    events={[
                        {
                            id: '1',
                            calendarId: '1',
                            title: 'TOAST UI Calendar Study',
                            body: 'Discuss the features and usage of TOAST UI Calendar',
                            isAllday: false,
                            start: '2024-07-21T22:30:00+09:00',
                            end: '2024-07-22T02:30:00+09:00',
                            goingDuration: 30,
                            comingDuration: 30,
                            location: 'Conference Room A',
                            attendees: ['John Doe', 'Jane Doe'],
                            category: 'time',
                            dueDateClass: '',
                            recurrenceRule: 'FREQ=WEEKLY;BYDAY=MO',
                            state: 'Busy',
                            isVisible: true,
                            isPending: false,
                            isFocused: false,
                            isReadOnly: false,
                            isPrivate: false,
                            color: '#ffffff',
                            backgroundColor: '#047bff',
                            dragBackgroundColor: '#047bff',
                            borderColor: '#047bff',
                            customStyle: '',
                            raw: {
                                memo: 'Discuss the new features to be added in the next release.',
                                hasToOrCc: true,
                                hasRecurrenceRule: true,
                            },
                        },
                        {
                            id: '2',
                            calendarId: '1',
                            title: 'Practice Meditation',
                            body: 'Morning meditation session',
                            isAllday: true,
                            start: '2024-07-22T00:00:00+09:00',
                            end: '2024-07-22T23:59:59+09:00',
                            goingDuration: 0,
                            comingDuration: 0,
                            location: 'Yoga Room',
                            attendees: [],
                            category: 'allday',
                            dueDateClass: '',
                            recurrenceRule: '',
                            state: '',
                            isVisible: true,
                            isPending: false,
                            isFocused: false,
                            isReadOnly: false,
                            isPrivate: false,
                            color: '#ffffff',
                            backgroundColor: '#9e5fff',
                            dragBackgroundColor: '#9e5fff',
                            borderColor: '#9e5fff',
                            customStyle: '',
                            raw: {
                                memo: 'Relax and unwind.',
                                hasToOrCc: false,
                                hasRecurrenceRule: false,
                            },
                        },
                    ]}
                />
            </CalendarContainer>
        </Container>
    );
};

export default CalendarView;
