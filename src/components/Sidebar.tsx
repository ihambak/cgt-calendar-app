// src/components/Sidebar.tsx
import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="menu">
            <ul>
                <li><a href="#calendar">캘린더 보기</a></li>
                <li><a href="#settings">설정하기</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
