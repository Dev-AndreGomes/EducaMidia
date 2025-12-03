// src/components/layout/SidebarLink.jsx
import React from 'react';

const SidebarLink = ({ item, currentPage, handleNav, handleQuizStart }) => {
    const { id, title, icon: Icon, color, isQuiz } = item;

    const handleClick = () => {
        if (isQuiz) {
            handleQuizStart();
        } else {
            handleNav(id);
        }
    };

    return (
        <button 
            onClick={handleClick}
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left ${
                currentPage === id 
                ? `bg-white shadow-md font-bold ${color}` 
                : 'text-slate-600 hover:bg-slate-100'
            }`}
        >
            <Icon size={20} className={currentPage === id ? color : 'text-slate-500'} />
            {title}
        </button>
    );
};

export default SidebarLink;