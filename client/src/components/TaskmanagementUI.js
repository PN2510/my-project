import React, { useState } from 'react';
import './styles.css'; // Assuming you have a styles.css file in the same folder

const TaskManagementUI = () => {
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleTaskForm = () => {
        setShowTaskForm(!showTaskForm);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleTaskFormSubmit = (e) => {
        e.preventDefault();
        // Add your task form submission logic here
        console.log('Task added');
    };

    return (
        <div className="container">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">
                    <a href="https://ibb.co/7jYp7PP">
                        <img src="https://i.ibb.co/Bcz68bb/png-jpg.png" alt="png-jpg" />
                    </a>
                    <h5>HORIZON ARCHITECTS</h5>
                    <h6>Version 0.0.0</h6>
                </div>
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li className="active">Tasks</li>
                        <li>DMS</li>
                        <li>Calendar</li>
                        <li>Projects</li>
                        <li>HR</li>
                        <li>Accounts</li>
                        <li>CRM</li>
                        <li>Analytics</li>
                        <li>Time Track</li>
                        <li>Notification</li>
                        <li>Communication</li>
                        <li>Feedback</li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                {/* Top Bar */}
                <div className="top-bar">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        id="search-input"
                    />
                    <button className="add-task-btn" id="add-task-btn" onClick={toggleTaskForm}>
                        + Add Task
                    </button>
                </div>

                {/* Button to Download Excel */}
                <button id="download-excel-btn" className="download-btn">
                    Download Task Report
                </button>

                {/* Task Form Section (Toggled by State) */}
                {showTaskForm && (
                    <section className="task-form" id="task-form-section">
                        <h1>Create New Task</h1>
                        <form id="task-form" onSubmit={handleTaskFormSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="Employee Name" name="employee_name" required />
                                <input type="text" placeholder="Project Name" name="project_name" required />
                                <input type="text" placeholder="Drawing Title" name="drawing_title" required />
                                <input type="text" placeholder="Comments" name="comments" />
                            </div>

                            <div className="form-group">
                                <label>Deadline (Optional)</label>
                                <input type="date" name="deadline" />
                            </div>

                            <div className="form-group">
                                <label>Time Allocation (Optional)</label>
                                <input type="number" name="time_allocation" placeholder="Hours" />
                            </div>

                            <button type="submit" className="submit-btn">Add Task</button>
                        </form>
                    </section>
                )}
            </main>
        </div>
    );
};

export default TaskManagementUI;