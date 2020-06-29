import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config.ts";
import router from "./router.ts";
import notFound from "./controllers/notFound.ts";
import errorMiddleware from "./middlewares/error.ts";

const app = new Application();
app.use(errorMiddleware); //洋葱模型，一定要先用
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);
await app.listen(`${APP_HOST}:${APP_PORT}`);
