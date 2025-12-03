// src/pages/ContentPage.jsx
import React from 'react';
import { navItems } from '../data/content';

const ContentPage = ({ title, children }) => {
    const item = navItems.find(i => i.title === title) || { color: 'text-slate-800' };
    
    return (
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden p-6 md:p-10">
            <div className="border-b pb-4 mb-8">
                <h2 className={`text-3xl md:text-4xl font-extrabold ${item.color}`}>{title}</h2>
            </div>

            
            {children}
        </div>
    );
};

export default ContentPage;