import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const Sidebar = styled.div<{ open: boolean }>`
    width: ${(props) => (props.open ? '250px' : '60px')};
    transition: width 0.3s;
    background-color: #2c3e50;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.open ? 'flex-start' : 'center')};
`;

const Content = styled.div`
    flex-grow: 1;
    padding: 20px;
`;

const ToggleButton = styled.button`
    background-color: transparent;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 10px;
`;

const MenuItem = styled(Link)<{ open: boolean }>`
    color: white;
    text-decoration: none;
    padding: 10px;
    display: block;
    width: 100%;
    text-align: ${(props) => (props.open ? 'left' : 'center')};
`;

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Container>
            <Sidebar open={isOpen}>
                cgt
                <ToggleButton onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? '<<' : '>>'}
                </ToggleButton>
                <MenuItem to="/" open={isOpen}>Home</MenuItem>
                <MenuItem to="/calendar" open={isOpen}>Calendar</MenuItem>
                <MenuItem to="/settings" open={isOpen}>Settings</MenuItem>
            </Sidebar>
            <Content>{children}</Content>
        </Container>
    );
};

export default Layout;
