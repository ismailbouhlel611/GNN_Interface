# Project Name

1. Create a virtual environment using `venv` inside the `backend` directory. Your folder structure should look like this:

your folder structure should look like this 

├── backend <br>
│ ├── bin <br>
│ ├── include <br>
│ ├── lib <br>
│ ├── pcd_back <br>
│ ├── pyvenv.cfg <br>
│ └── DB.env <br>
<br>
2. Activate the virtual environment using the following command: 

```source backend/bin/activate```

3. Install the required packages using the following command:
```pip install -r backend/pcd_back/requirements.txt```
4. Set up the database by running the following commands:
```python backend/pcd_back/manage.py makemigrations
python backend/pcd_back/manage.py migrate```
5. Start the server using the following command:
```python backend/pcd_back/manage.py runserver```
6. Open your browser and navigate to `http://localhost:8000/` to access the backend.

Note that you should contact DB Admin to add you IP to the atlas cluster 

