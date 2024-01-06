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

- Navigate to the backend directory using the following command:
    ```bash
    cd backend
    python -m venv venv
    .\venv\Scripts\activate  # (Windows)
    source venv/bin/activate  # (Linux/Mac)

3. **Use the following command to install the required Python packages specified in the `requirements.txt` file:**
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
- install the following command
  ```bash
    npm install

## Configuration

### Backend Configuration (Flask)

1. **Environment Variables:**
- Create a `.env` file in the root of the `backend` directory. Include the following environment variables:
  ```env
  SQLALCHEMY_DATABASE_URI=your_database_url  # Specify your database connection URL