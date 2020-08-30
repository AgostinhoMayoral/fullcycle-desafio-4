# pull official base image
FROM node:12.18.3-alpine3.12

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json .
#COPY yarn.lock .
#RUN yarn
RUN npm install

RUN npm install react-scripts@3.4.0
# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "run", "start"]   


#sudo docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true tinhomayoral/fullcycle-desafio-4:latest
