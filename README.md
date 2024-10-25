const xlsx = require('xlsx');
const fs = require('fs');

const data = [
    { id: 1, report_level_id: 2, farmer_id: 10163, village_id: 201, soil_type: "Black", crop_type: "Cotton", year: "2024-2025", group_id: "1" },
    { id: 2, report_level_id: 2, farmer_id: 10164, village_id: 202, soil_type: "Red", crop_type: "Maize", year: "2024-2025", group_id: "2" },
    { id: 3, report_level_id: 2, farmer_id: 10165, village_id: 203, soil_type: "Mixed", crop_type: "Chillii", year: "2024-2025", group_id: "3" },
    { id: 4, report_level_id: 2, farmer_id: 10166, village_id: 204, soil_type: "Sandy Soil", crop_type: "Chillii", year: "2024-2025", group_id: "1" },
    { id: 5, report_level_id: 2, farmer_id: 10167, village_id: 205, soil_type: "Sandy Soil", crop_type: "Chillii", year: "2024-2025", group_id: "2" },
    { id: 6, report_level_id: 2, farmer_id: 10167, village_id: 206, soil_type: "Sandy Soil", crop_type: "Chillii", year: "2025-2026", group_id: "3" },
];

// Convert data to a worksheet
const worksheet = xlsx.utils.json_to_sheet(data);

// Create a new workbook and add the worksheet
const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, 'Farm Data');

// Write the workbook to a file
xlsx.writeFile(workbook, 'FarmData.xlsx');

console.log('Excel file created successfully!');
Explanation:
xlsx.utils.json_to_sheet(data) converts the data array into a worksheet format.
xlsx.utils.book_new() creates a new workbook, and xlsx.utils.book_append_sheet(workbook, worksheet, 'SheetName') appends the worksheet to this workbook.
xlsx.writeFile(workbook, 'FarmData.xlsx') saves the workbook as FarmData.xlsx in the current directory
