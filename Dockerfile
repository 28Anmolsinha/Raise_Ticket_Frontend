
FROM node:18-alpine AS builder

WORKDIR /app


COPY package*.json ./
RUN npm install


COPY . .
RUN npm run build


FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html


RUN rm -rf ./*


COPY --from=builder /app/dist .


RUN sed -i 's/listen       80;/listen       5173;/' /etc/nginx/conf.d/default.conf


EXPOSE 5173


CMD ["nginx", "-g", "daemon off;"]
