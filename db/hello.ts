import { v4 } from "https://deno.land/std/uuid/mod.ts";

    const createHello = (name: string) => {
      return [
        {
          id: v4.generate(), //生成一个随机的 ID 字符串
          name,
        },
      ]};
    export { createHello };