import { Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();
// 路由控制器
//import getHellos from "./controllers/getHellos.ts"
import createHello from "./controllers/createHello.ts";
// import deleteHello from "./controllers/deleteHello.ts";
// import updateHello from "./controllers/updateHello.ts";
// import findHello from "./controllers/findHello.ts";
router
  .post("/createHello", createHello)
  // .get("/getHellos", getHellos)
  
  // .get("/findHello/:id", findHello)
  // .put("/updateHello/:id", updateHello)
  // .delete("/deleteHello/:id", deleteHello);
export default router;

