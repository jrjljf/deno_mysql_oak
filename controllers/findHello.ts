import { Response } from "https://deno.land/x/oak/mod.ts";
// import Hello from "../models/hello.ts";
// import hellos from "../db/hello.ts"
import HelloModel from "../services/hello.ts";
export default async ({
    params,
    response,
  }: {
    params: { id: string };
    response: Response;
  })=>{
 // const hello:Hello  = hellos.find(it => it.id = params.id);
 const hello = await HelloModel.isExists({ id: params.id})
  
 if (!hello) {
    response.status = 404;
    response.body = {
      success: false,
      message: "不存在该数据",
    };
    return;
  }

  response.status = 200;
  response.body = {
    success: true,
   // data: hello
    data: await HelloModel.findHello({ id: params.id }),
  };
}