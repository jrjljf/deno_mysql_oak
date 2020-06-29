// 4.1 代码
// import { Application, Router, Response} from "https://deno.land/x/oak/mod.ts";
// const router = new Router();
// router.delete('/deleteHello/:id',(({response,params}: {response: Response; params:{id:number}}) => { 
//     try{ 
//         const decoder = new TextDecoder("utf-8");
//         const data = Deno.readFileSync('./hello.json');  
//         const res = JSON.parse(decoder.decode(data));
//         if(params && params.id){
//             let index = 0;
//             for(let it of res){
//                 if(params.id === it.id){
//                     res.splice(index,1);
//                     const encoded = new TextEncoder();
//                     Deno.writeFileSync('./hello.json',encoded.encode(JSON.stringify(res)))
//                     response.status = 200;
//                     response.body = '删除成功'; 
//                 }
//                 index ++;
//             }
//         }
        
//     }catch(err){
//        console.log(err)
//        response.status= 500;
//     }
// }))

// const app = new Application();
// app.use(router.routes());
// app.use(router.allowedMethods());
// await app.listen({port: 3000})


import {Response } from "https://deno.land/x/oak/mod.ts";
import HelloModel from "../services/hello.ts";
import hellos from "../db/hello.ts"
export default async ({
  params,
  response,
}: {
  params: {id: string};
  response: Response;
}) => {
  if (!params.id) {
    response.status = 400;
    response.body = {success: false, msg: "没有数据" };
    return;
  }
  const data = await HelloModel.deleteHello({
    id: params.id,
  });
  const msg = data ? `id为${params.id}的数据删除成功` : `id为${params.id}的数据不存在`
  //const data = hellos.filter(it => it.id = params.id);
  response.status = 200;
  response.body = { success: true, msg,  };
};
