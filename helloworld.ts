
 // 3.2节
 import { listenAndServe } from 'https://deno.land/std/http/server.ts';
 listenAndServe({ port: 3000 }, async (req) => {
   if (req.method === 'GET') {
     req.respond({
       status: 200,
       body: "hello world"
     })
   }
 })


// 3.6节代码
//  import { listenAndServe } from 'https://deno.land/std/http/server.ts';  
//  listenAndServe({ port: 3000 }, async (req) => {
//    if (req.method === 'GET' ) {
//      const params = req.url.substr(1); 
//      const buffers = await Deno.readFileSync('./hello.json'); 
//      const decoder = new TextDecoder("utf-8");
//      const jsonStr = decoder.decode(buffers);
//      const res = JSON.parse(jsonStr).find((it:any) => it.name === params);  
//      await req.respond({
//        status: 200,   
//        body: `hello ${res.name}`
//      })
//    }
//  })

