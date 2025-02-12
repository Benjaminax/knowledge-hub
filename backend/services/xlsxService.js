import path from 'path';
import { fileURLToPath } from 'url';
import XLSX from 'xlsx';
import fs from 'fs';

// Fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createXlsx = async (bookings) => {
  try {
    const ws = XLSX.utils.json_to_sheet(bookings.map(booking => ({
      Name: booking.name,
      Email: booking.email,
      Phone: booking.phone,
      Message: booking.message,
    })));

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Bookings");

    const filePath = path.join(__dirname, '../data/bookings.xlsx'); // Corrected __dirname usage
    XLSX.writeFile(wb, filePath);

    return filePath;
  } catch (error) {
    console.error("Error creating XLSX file:", error.message);
    throw error;
  }
};
