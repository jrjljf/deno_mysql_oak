
import { listenAndServe } from 'https://deno.land/std/http/server.ts';

listenAndServe({ port: 3000 }, async (req) => {
  if (req.method === 'GET' ) {
    const params = req.url.substr(1);
    const decoder = new TextDecoder("utf-8");
    const jsonStr = await Deno.readFileSync('./hello.json');
    const data = decoder.decode(jsonStr)
    const res = JSON.parse(data).find((it:any) => it.name === params) 
    console.log('params',res.name)
    await req.respond({
      status: 200,
      headers: new Headers({
        'content-type': 'text/html',
      }),    
      body: `hello ${res.name}`
    })
  }
})

console.log('Server running on localhost:3000')


// step 1
// import { listenAndServe } from 'https://deno.land/std/http/server.ts';
// listenAndServe({ port: 3000 }, async (req) => {
//   if (req.method === 'GET' && req.url === '/') {
//     const decoder = new TextDecoder("utf-8");
//     req.respond({
//       status: 200,
//       headers: new Headers({
//         'content-type': 'text/html',
//       }),
//       body: "hello world"
//     })
//   }
// })

// import { listenAndServe } from 'https://deno.land/std/http/server.ts';

// listenAndServe({ port: 3000 }, async (req) => {
//   if (req.method === 'GET' && req.url === '/') {
//     const decoder = new TextDecoder("utf-8");
//     req.respond({
//       status: 200,
//       headers: new Headers({
//         'content-type': 'text/html',
//       }),
//       body: "hello world",
//     })
//   }
// })

// console.log('Server running on localhost:3000')