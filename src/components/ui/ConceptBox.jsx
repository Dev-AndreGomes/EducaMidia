// src/components/ui/ConceptBox.jsx
import React from 'react';

const ConceptBox = ({ title, text, color }) => (
    <div className={`p-6 rounded-xl shadow-inner ${color} border-l-4 border-indigo-400`}>
        <h4 className="font-bold text-lg text-slate-800 mb-2">{title}</h4>
        <p className="text-slate-600 text-sm">{text}</p>
    </div>
);

export default ConceptBox;