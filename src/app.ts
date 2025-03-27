import configureOpenApi from "@/lib/configure-openapi";
import createApp from "@/lib/create-app";
import habits from "@/routes/habits/habits.index";
import index from "@/routes/index.route";

const app = createApp();

const routes = [
  index,
  habits,
];

routes.forEach((route) => {
  app.route("/", route);
});

configureOpenApi(app);

export default app;
