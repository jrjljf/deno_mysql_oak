import Hello from "../models/hello.ts";
import client from "../db/client.ts";

const TABLE = "hello"; //表名称
export default {
   // ?表示参数 name
  createHello: async ({ name }: Hello) => {
    const res = await client.query(
      `INSERT INTO ${TABLE} (name) values(?)`,
      [
        name
      ],
    );
      console.log('services创建',res,name )
      return res;

    // return await client.query(
    //   `INSERT INTO ${TABLE} (name) VALUES ('${name}')`,
    // );
  },

  getAll: async () => {
    const res =  await client.query(`SELECT * FROM ${TABLE}`);
    console.log('得到所有数据', res)
    return res;
  },

  isExists: async ({ id }: Hello) => {
    const [result] = await client.query(
      `SELECT COUNT(*) count FROM ${TABLE} WHERE id = ? LIMIT 1`,
      [id],
    );
    return result.count > 0;
  },
  
  findHello: async ({ id }: Hello) => {
    const res = await client.query(
      `SELECT * FROM ${TABLE} WHERE id = ?`,
      [id],
    )
    console.log('找到某一个', id, res)
    return res;
  },

  updateHello:  async ({ id, name }: Hello) => {
    console.log('id, name',id, name)
    const result = await client.query(
      `UPDATE ${TABLE} SET name=? WHERE id=?`,
      [
        name,
        id,
      ],
    );
    console.log('更新结果',result)
    return result.affectedRows;
  },

  //id不存在的情况下也会显示删除成功，result为0
  deleteHello: async ({ id }: Hello) => {
    const result = await client.query(
      `DELETE FROM ${TABLE} WHERE id = ?`,
      [id],
    );
    console.log('result.affectedRows',result,id)
    return result.affectedRows;
  },
};