import { v4 } from "https://deno.land/std/uuid/mod.ts";
import Hello from '../models/hello.ts';

let hellos: Hello[] = [
  {
    id: v4.generate(), //生成一个随机的 ID 字符串
    name: 'world',
  },
  {
    id: v4.generate(),
   name: 'china',
  },
];
export default hellos;
