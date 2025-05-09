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

FROM node:23.10-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# If using standalone output
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 9001
CMD [ "npm", "run", "start" ]
