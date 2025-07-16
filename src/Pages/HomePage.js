// src/pages/HomePage.js

import React from 'react';

const HomePage = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Navbar */}
            <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-700">City News Hub</h1>
                <nav className="space-x-4">
                    <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
                    <a href="/newspapers" className="text-gray-700 hover:text-blue-500">Newspapers</a>
                    <a href="/plans" className="text-gray-700 hover:text-blue-500">Plans</a>
                    <a href="/login" className="text-gray-700 hover:text-blue-500">Login</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="text-center bg-blue-50 py-16 px-6">
                <h2 className="text-4xl font-bold text-blue-700 mb-4">Delivering the News to Every Doorstep</h2>
                <p className="text-lg text-gray-700 mb-6">
                    We distribute all major newspapers daily across your city — timely, reliably, and professionally.
                </p>
                <a href="/plans" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                    View Subscription Plans
                </a>
            </section>

            {/* Highlights Section */}
            <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow text-center">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Top Newspapers</h3>
                    <p className="text-gray-600">Choose from a wide range of regional and national papers.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Reliable Delivery</h3>
                    <p className="text-gray-600">Morning delivery at your doorstep, every single day.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">Flexible Plans</h3>
                    <p className="text-gray-600">Subscribe weekly, monthly, or yearly as per your needs.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white text-center py-4 border-t text-gray-500">
                © 2025 City News Hub. All rights reserved.
            </footer>
        </div>
    );
};

export default HomePage;
