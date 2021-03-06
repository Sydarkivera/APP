
FROM python:3.7-alpine

# Copy in your requirements file

# OR, if you’re using a directory for your requirements, copy everything (comment out the above and uncomment this if so):
# ADD requirements /requirements

# Install build deps, then run `pip install`, then remove unneeded build deps all in a single step. Correct the path to your production requirements file, if needed.
# RUN set -ex \
#     && apk add --no-cache --virtual .build-deps \
#             gcc \
#             make \
#             libc-dev \
#             musl-dev \
#             linux-headers \
#             pcre-dev \
#             postgresql-dev \
#     && gcc /viewtar.c \
#     && pyvenv /venv \
#     && /venv/bin/pip install -U pip \
#     && LIBRARY_PATH=/lib:/usr/lib /bin/sh -c "/venv/bin/pip install --no-cache-dir -r /requirements.txt" \
#     && runDeps="$( \
#             scanelf --needed --nobanner --recursive /venv \
#                     | awk '{ gsub(/,/, "\nso:", $2); print "so:" $2 }' \
#                     | sort -u \
#                     | xargs -r apk info --installed \
#                     | sort -u \
#     )" \
#     && apk add --virtual .python-rundeps $runDeps \
#     && apk del .build-deps

RUN apk --no-cache --virtual .build-deps add gcc linux-headers libc-dev clamav clamav-libunrar postgresql-dev curl openjdk8-jre py3-psycopg2
# RUN apk add --repository http://dl-cdn.alpinelinux.org/alpine/edge/main --no-cache py3-psycopg2
# RUN echo "http://dl-cdn.alpinelinux.org/alpine/latest-stable/community" >> /etc/apk/repositories
RUN apk update
RUN apk add docker
#RUN service docker enable

RUN freshclam


ADD ./Django/requirements.txt /requirements.txt
ADD ./Django/viewtar.c /viewtar.c


#insatll verapdf
# RUN curl -L http://downloads.verapdf.org/rel/verapdf-pdfbox-installer.zip -o /tmp/verapdf-installer.zip
# RUN unzip /tmp/verapdf-installer.zip -d /tmp/
# ADD ./auto-install-veraPDF.xml /tmp/auto-install-veraPDF.xml
# RUN java -jar /tmp/verapdf-pdfbox-1.12.1/verapdf-izpack-pdfbox-installer-1.12.1.jar /tmp/auto-install-veraPDF.xml
# ENV PATH="/opt/verapdf:${PATH}"

RUN gcc /viewtar.c


RUN pip install -r requirements.txt


# Copy your application code to the container (make sure you create a .dockerignore file if any large files or directories should be excluded)
RUN mkdir /code/
WORKDIR /code/
ADD ./Django/ /code/
RUN mkdir /code/log && mkdir /code/internal && mv /a.out /code/internal/
# RUN mkdir /code/log/

# uWSGI will listen on this port
EXPOSE 80

# Add any custom, static environment variables needed by Django or your settings file here:
# ENV DJANGO_SETTINGS_MODULE=config.settings

# uWSGI configuration (customize as needed):
# ENV UWSGI_VIRTUALENV=/venv UWSGI_WSGI_FILE=config/wsgi.py UWSGI_HTTP=:80 UWSGI_MASTER=1 UWSGI_WORKERS=2 UWSGI_THREADS=8  UWSGI_LAZY_APPS=1 UWSGI_WSGI_ENV_BEHAVIOR=holy

# Call collectstatic (customize the following line with the minimal environment variables needed for manage.py to run):
# RUN python manage.py makemigrations api
# RUN python manage.py migrate
# RUN python populate_databse.py

# CMD ["python", "manage.py", "runserver", "0.0.0.0:80"]
# Start uWSGI
# CMD ["/venv/bin/uwsgi", "--http-auto-chunked", "--http-keepalive", "--static-map", "/static=/code/static_root"]
