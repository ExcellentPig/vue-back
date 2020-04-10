FROM node
LABEL name = "vue-bacl"
LABEL version = "1.0"
COPY . /app
WORDDIR /app
RUN npm install
EXPOSE 3000
CMD npm start