import { Response } from "https://deno.land/x/oak/mod.ts";
import HelloModel from "../services/hello.ts";
export default async  ({ response }: { response: Response }) => {
    response.status = 200;
    const data = await HelloModel.getAll();
    response.body = {
      success: true,
      data
    };
};

