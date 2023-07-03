FROM node:16-alpine AS build
USER root

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM node:16-alpine
USER root

# Build args
ARG ENV

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY --chown=node:node --from=build /app/public /app/public
COPY --chown=node:node --from=build /app/.next /app/.next
COPY --chown=node:node --from=build /app/next.config.js /app/next.config.js
COPY --chown=node:node --from=build /app/package.json /app/package.json
COPY --chown=node:node --from=build /app/next-i18next.config.js /app/next-i18next.config.js
#COPY --chown=node:node --from=build store.js /app/store.js

RUN npm install --omit=dev && \
    echo -e "#!/bin/ash\nnpm start" > ./entrypoint.sh && \
    chmod +x ./entrypoint.sh && \
    chown -R node:node /app

ENV NODE_ENV production

USER node

ENTRYPOINT ["./entrypoint.sh"]
