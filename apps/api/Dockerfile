FROM node:18-alpine
ENV NODE_ENV=production
USER node
WORKDIR /api
COPY --chown=node package*.json ./
RUN npm install
COPY --chown=node . .
RUN npm run build   
ENV HOST=0.0.0.0 PORT=8080
EXPOSE ${PORT}
CMD [ "node", "." ]
