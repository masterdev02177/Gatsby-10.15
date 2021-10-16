FROM registry.digitalocean.com/railflow/docs-base:v1 as build
WORKDIR /app

COPY yarn.lock package.json ./
COPY . .
RUN yarn && yarn build:fresh


FROM nginx:alpine
#
COPY ./nginx.conf /etc/nginx/nginx.conf
#
RUN rm -rf /usr/share/nginx/html/*
#
COPY --from=build /app/public /usr/share/nginx/html
#
EXPOSE 80
#
CMD ["nginx", "-g", "daemon off;"]

#CMD ["yarn", "serve", "-H", "0.0.0.0", "-p 80"]
