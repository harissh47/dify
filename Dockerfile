FROM node
FROM python:3.10-slim 
WORKDIR /app

COPY . . 
RUN pip install -r api/requirements.txt
RUN pip install -r api/requirements-dev.txt
EXPOSE 3000
RUN npm run dev
RUN flask run --host 0.0.0.0 --port 5001 --debug
