#! /bin/bash
  
python manage.py makemigrations track
python manage.py migrate
cd frontend
npm run dev
cd ..
python manage.py runserver
