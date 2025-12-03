// src/components/layout/Layout.jsx
import React from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import SidebarLink from './SidebarLink';
import { navItems } from '../../data/content';

const Layout = ({ children, currentPage, setCurrentPage, startQuiz }) => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    // Funções para passar para o SidebarLink
    const handleNav = (pageId) => {
        setCurrentPage(pageId);
        setIsSidebarOpen(false);
    };

    const handleQuizStart = () => {
        startQuiz();
        setIsSidebarOpen(false);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex">
            
            {/* Sidebar (Desktop) */}
            <div className="hidden lg:flex w-64 flex-col fixed inset-y-0 bg-slate-200 border-r border-slate-300 p-6">
                <div className="flex items-center gap-2 mb-10 text-2xl font-bold text-slate-800">
                    <BookOpen className="text-indigo-600" size={30} /> EducaMídia
                </div>
                <nav className="flex flex-col space-y-2">
                    {navItems.map(item => (
                        <SidebarLink 
                            key={item.id} 
                            item={item}
                            currentPage={currentPage}
                            handleNav={handleNav}
                            handleQuizStart={handleQuizStart}
                        />
                    ))}
                </nav>
            </div>

            {/* Sidebar (Mobile Overlay) */}
            <div 
                className={`fixed inset-0 z-40 bg-gray-900 bg-opacity-75 transition-opacity duration-300 ${isSidebarOpen ? 'block' : 'hidden'} lg:hidden`} 
                onClick={() => setIsSidebarOpen(false)}
            ></div>
            
            <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-200 border-r border-slate-300 p-6 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-xl font-bold text-slate-800">Navegação</h2>
                    <button onClick={() => setIsSidebarOpen(false)} className="text-slate-600 hover:text-slate-800"><X size={24} /></button>
                </div>
                <nav className="flex flex-col space-y-2">
                    {navItems.map(item => (
                        <SidebarLink 
                            key={item.id} 
                            item={item}
                            currentPage={currentPage}
                            handleNav={handleNav}
                            handleQuizStart={handleQuizStart}
                        />
                    ))}
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="lg:ml-64 flex-1 p-4 md:p-10">
                <header className="lg:hidden flex justify-between items-center mb-6 border-b pb-4">
                    <h1 className="text-xl font-bold text-slate-800">Protótipo Multimídia</h1>
                    <button onClick={() => setIsSidebarOpen(true)} className="p-2 rounded-lg bg-white shadow-md text-indigo-600"><Menu size={24} /></button>
                </header>
                {children}
            </div>
        </div>
    );
};

export default Layout;