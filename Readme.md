# INSTRUCTION TO RUN THE BACKEND

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
2. Activate the virtual environment using the following command: <br>

```source backend/bin/activate```<br>

3. Install the required packages using the following command:<br>

```pip install -r backend/pcd_back/requirements.txt```<br>

4. Set up the database by running the following commands:<br>

```python backend/pcd_back/manage.py makemigrations```<br>

```python backend/pcd_back/manage.py migrate```<br>

5. Start the server using the following command:<br>

```python backend/pcd_back/manage.py runserver```<br>

6. Open your browser and navigate to `http://localhost:8000/` to access the backend.<br>

#Screenshots

![signin](https://github.com/ismailbouhlel611/GNN_Interface/assets/98423164/9305f689-5d3f-497b-8a0f-2a1c33007b24)
![signup](https://github.com/ismailbouhlel611/GNN_Interface/assets/98423164/c0e6f228-feeb-4cd4-bd4c-918cb30aac15)
![retypepassword](https://github.com/ismailbouhlel611/GNN_Interface/assets/98423164/def73f2f-305e-40f1-8c06-6bc903d17101)
![graph generated](https://github.com/ismailbouhlel611/GNN_Interface/assets/98423164/3408bb50-0069-474a-9c18-2f2203375023)
![accounts](https://github.com/ismailbouhlel611/GNN_Interface/assets/98423164/d90d21dd-02fa-4271-a27a-559acac6e854)







Note that you should contact DB Admin to add you IP to the atlas cluster <br>

