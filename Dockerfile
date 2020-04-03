FROM node:12.10.0-alpine

RUN apk add git \
    && cd home/ \
    && git clone https://github.com/eduard-kirilov/Online-store-2-frontend.git \
    && cd Online-store-2-frontend \
    && yarn clean \
    && yarn \
    && yarn build

WORKDIR /home/Online-store_Phase2_client

EXPOSE 5000

CMD ["yarn", "serve"]
