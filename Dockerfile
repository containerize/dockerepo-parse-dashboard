FROM node

WORKDIR /parse

ADD package.json /parse

RUN npm install

ENV ADMIN_USER=user
ENV ADMIN_PASS=pass

ENV PARSE_DASHBOARD_ALLOW_INSECURE_HTTP=true

EXPOSE 4040

CMD ["npm", "start"]
