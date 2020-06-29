// 4.1代码
// import { Application, Router, Response, Request } from "https://deno.land/x/oak/mod.ts";
// const router = new Router();
// router.put('/updateHello/:id',( async ({response, params,request}: {response: Response;params: {id: number} ,request:Request}) => { 
//     try{ 
//         const decoder = new TextDecoder("utf-8");
//         const data = Deno.readFileSync('./hello.json');  
//         const res = JSON.parse(decoder.decode(data));
//         const newHello = await request.body().then((hello:any) => hello)
//         if(params && params.id && newHello){
//             let index = 0;
//             for(let it of res){
//                 if(params.id === it.id){
//                     res.splice(index,1,newHello); //直接替换不行
//                     const encoded = new TextEncoder();
//                     Deno.writeFileSync('./hello.json',encoded.encode(JSON.stringify(res)))
//                     response.status = 200;
//                     response.body = '更新成功'; 
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

//4.3代码
import { Request, Response } from "https://deno.land/x/oak/mod.ts";
import HelloModel from "../services/hello.ts";
//import Hello from "../models/hello.ts"
// import hellos from "../db/hello.ts"
export default async (
    { params, request, response }: {
      params: { id: string },
      request: Request,
      response: Response,
    },
  ) => {
    // const hello:Hello |undefined  = hellos.find(it => it.id = params.id)
    const hello = await HelloModel.isExists({ id: params.id})    
    if (!hello) {
      response.status = 404;
      response.body = {
        success: false,
        message: "该数据不存在",
      };
      return;
    }

    const body = await request.body();
    // const updatedData: { name: string } = body.value;
    // let data = HelloModel.getAll().map((t) => {
    //   return t.id === params.id ? { ...t, ...updatedData } : t;
    // });
    const data = await HelloModel.updateHello({
      id: params.id,
      name: body.value.name,
    });
    response.status = 200;
    response.body = {
      success: true,
      msg :`id为${params.id}的数据更新成功`,
    };
  };






