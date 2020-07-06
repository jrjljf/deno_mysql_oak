import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router.ts";
import notFound from "./controllers/notFound.ts";
import errorMiddleware from "./middlewares/error.ts";

const app = new Application();
app.use(errorMiddleware); //洋葱模型，一定要先用
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);
await app.listen({port: 3000});
