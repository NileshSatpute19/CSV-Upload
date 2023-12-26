# CSV Upload and Display Project

This project is a simple web application built using Node.js and EJS to facilitate the upload and display of CSV files. It provides a user-friendly interface to upload CSV files, list the uploaded files, and view the data in a tabular format with dynamic headers.

## Technologies Used

- **Node.js:** The backend is developed using Node.js, providing a server environment.
- **EJS (Embedded JavaScript):** EJS is used for rendering dynamic content on the front end.

## Features

1. **Upload CSV Files:**

   - Users can upload CSV files using the provided file input.
   - The system considers the delimiter to be a comma (`,`).

2. **List of Uploaded CSV Files:**

   - The application maintains a list of all uploaded CSV files.
   - Users can see the names of the uploaded files.

3. **View CSV Data:**

   - Upon selecting a CSV file, the application displays all the data in a table on the front end.
   - Dynamic headers are generated based on the column headers of the uploaded CSV file.

4. **Search Functionality:**

   - A search box is provided to filter rows based on a specific column.
   - An empty search box displays all the data.

5. **Sorting (Extra Points):**

   - Additional functionality includes sorting buttons (ascending and descending) for each column on the front end.

6. **File Type Validation (Extra Points):**
   - Both front-end and server-side validations ensure that only CSV files can be uploaded.

## How to Run

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the Node.js server.
5. Open your browser and visit `http://localhost:4010/list-files` to access the application.

Feel free to explore, upload CSV files, and interact with the provided features!

## Contribution

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please create an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
