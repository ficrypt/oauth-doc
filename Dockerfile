FROM node:23.10-alpine AS base
LABEL authors="erielmejias99"

#RUN apk add --no-cache git openssh-client

WORKDIR /app

COPY package*.json .

RUN npm install
COPY . .

FROM base AS builder

ENV NODE_ENV production

RUN npm run build

FROM nginx:alpine AS runner
COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 9031
CMD ["nginx", "-g", "daemon off;"]
