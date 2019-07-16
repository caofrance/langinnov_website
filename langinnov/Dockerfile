FROM trion/ng-cli-karma

RUN mkdir -p /app
COPY . /app
RUN cd /app && npm install
CMD ["ng build --prod"]
