import configureOpenApi from "@/lib/configure-openapi";
import createApp from "@/lib/create-app";
import index from "@/routes/index.route";

const app = createApp();

const routes = [
  index,
];

routes.forEach((route) => {
  app.route("/", route);
});

configureOpenApi(app);

export default app;
