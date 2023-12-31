FROM denoland/setup-deno@v1

WORKDIR /app

COPY . /app

EXPOSE 8000

RUN deno cache main.ts

CMD [ "run", "--allow-all", "main.ts" ]
