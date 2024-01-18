import fastify from "fastify";

const app = fastify();

app.get("/hello", async (request, reply) => {});

app.listen({ port: 3333 }).then(() => console.log("running server is potent"));
