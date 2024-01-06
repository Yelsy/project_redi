## Introduction
Through this web application, we will assist people by promoting assertive communication that inspires
people to live connected to the frequency of love, joy, the pursuit of truth, and the transcendence of ego and cults.
## Tecnologies
- Flask
- SQLAlchemy
- Flask-JWT-Extended 
- Next
- Tailwind CSS
- MySQL

## Installation

### Backend (Flask)

1. **Install Python:**
   Make sure you have Python installed on your system. You can download it from [python.org](https://www.python.org/downloads/).

2. **Set Up Virtual Environment (optional but recommended):**
   It's recommended to use a virtual environment to isolate the project dependencies.
   You can create one by running the following command in the backend directory:

  **Navigate to the backend directory using the following command:**
   ```bash
   cd backend
   python -m venv venv
   .\venv\Scripts\activate  # (Windows)
   source venv/bin/activate  # (Linux/Mac)

3 **Use the following command to install the required Python packages specified in the `requirements.txt` file:**
    ```bash
    pip install -r requirements.txt

### Frontend Setup (Next.js)

1. **Install Node.js and npm:**
   Begin by installing Node.js and npm, the Node.js package manager, on your system.
    You can download and install them from [nodejs.org](https://nodejs.org/).

2. **Navigate to the Frontend Directory:**
   Move to the frontend directory using the following command:
  ```bash
   cd frontend

3. **Execute the following command to install the required Node.js packages and dependencies for the frontend:**
    ```bash
    npm install

4. ### Start Frontend Development Server

Execute the following command to launch the development server for the frontend:
    ```bash
    npm run dev

## Configuration

### Backend Configuration (Flask)

1. **Environment Variables:**
   Create a `.env` file in the root of the `backend` directory. Include the following environment variables:

   ```env
   SQLALCHEMY_DATABASE_URI=your_database_url  # Specify your database connection URL

2. Ensure that you have the Firebase credentials file (dev-proyect-redi-firebase-adminsdk-fu8it-8ae628d9ad.json)
   in the root of your backend directory.

3. **Backend Configuration Details (config.py):**
   The backend configuration is managed through the `config.py` file in the `backend` directory. Below is a summary of key configurations:

     - `DEBUG`: Set to `True` in `DevelopmentConfig` for debugging.
     - `SQLALCHEMY_DATABASE_URI`: URL for connecting to your database. Specified in the `.env` file.
     - `SECRET_KEY` and `JWT_SECRET_KEY`: Used for security purposes.

3. **Running the Application**
    ```bash
    # Start the backend server
    cd backend/redi
    python run.py

    # Start the frontend development server
    cd frontend
    npm run dev
