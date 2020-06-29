//4.1代码
// import { Application, Router, Response} from "https://deno.land/x/oak/mod.ts";
// const router = new Router();

// router.get('/createHello',( ({response,}: {response: Response;}) => { 
//     try{ 
//         const decoder = new TextDecoder("utf-8");
//         const data = Deno.readFileSync('./hello.json');  
//         const res = JSON.parse(decoder.decode(data));
//         const len = res.length;
//         const hello = {
//             "id": len + 1,
//             "name": "new name",
//         }
//         res.push(hello)
//         const encoded = new TextEncoder();
//         Deno.writeFileSync('./hello.json',encoded.encode(JSON.stringify(res)))
//         response.status = 200;
//         response.body = `新增${JSON.stringify(hello)}成功`;   
//     }catch(err){
//        console.log(err)
//        response.status= 500;
//     }
// });

// const app = new Application();
// app.use(router.routes());
// app.use(router.allowedMethods());
// await app.listen({port: 3000})

// 增加数据库之后的代码
import { Request, Response } from "https://deno.land/x/oak/mod.ts";
import hellos from "../db/hello.ts"; //注释掉
import HelloServer from "../services/hello.ts"; //新增
export default async ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = {success: false, msg: "没有数据" };
    return;
  }
  const { value: {name} } = await request.body();
  const hellos = await HelloServer.createHello({name}); //新增
  response.status = 200;
  response.body = { success: true, msg: `创建${name}成功`};
};
