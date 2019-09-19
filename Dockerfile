FROM node:12.10.0-alpine

RUN apk add git \
    && cd home/ \
    && git clone https://github.com/Frost0x/Online-store_Phase2_client.git \
    && cd Online-store_Phase2_client \
    && yarn clean \
    && yarn \
    && yarn build

WORKDIR /home/Online-store_Phase2_client

EXPOSE 5000

CMD ["yarn", "serve"]
