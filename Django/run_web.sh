#!/bin/sh

# wait for PSQL server to start
sleep 10

# cd myproject
# prepare init migration
#python manage.py makemigrations api
# migrate db, so we have the latest db schema
#python manage.py migrate

#python populate_database.py
# start development server on public ip interface, on port 8000
python manage.py runserver 0.0.0.0:80
