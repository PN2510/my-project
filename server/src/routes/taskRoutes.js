// Import required dependencies
const express = require('express');
const exceljs = require('exceljs');
const router = express.Router();

// In-memory storage for tasks (you can replace this with a database later)
let tasks = [];

// Route to handle task submission (POST)
router.post('/submit_task', (req, res) => {
    const { employee_name, project_name, drawing_title, comments, deadline, time_allocation } = req.body;

    // Basic validation
    if (!employee_name || !project_name || !drawing_title) {
        return res.status(400).json({ success: false, message: 'Required fields are missing' });
    }

    // Save the task (in memory, or you could integrate with a database)
    const taskData = { employee_name, project_name, drawing_title, comments, deadline, time_allocation };
    tasks.push(taskData);

    return res.json({ success: true, message: 'Task added successfully!' });
});

// Route to download task report as Excel file (GET)
router.get('/download_excel', async (req, res) => {
    try {
        const workbook = new exceljs.Workbook();
        const worksheet = workbook.addWorksheet('Tasks');

        // Define columns for the Excel sheet
        worksheet.columns = [
            { header: 'Employee Name', key: 'employee_name' },
            { header: 'Project Name', key: 'project_name' },
            { header: 'Drawing Title', key: 'drawing_title' },
            { header: 'Comments', key: 'comments' },
            { header: 'Deadline', key: 'deadline' },
            { header: 'Time Allocation', key: 'time_allocation' }
        ];

        // Add rows from the tasks array
        tasks.forEach(task => worksheet.addRow(task));

        // Write the Excel file to the response
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=task_report.xlsx');

        await workbook.xlsx.write(res);
        res.end();
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Export the router to be used in the main app
module.exports = router;