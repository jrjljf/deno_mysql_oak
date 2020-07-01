import { Client } from "https://deno.land/x/mysql/mod.ts";
const DATABASE = "deno"; //数据库名称
const TABLE = "hello"; //表名称
const client = await new Client();

client.connect({
  hostname: "127.0.0.1",
  username: "root",
  password: "", 
  db: "",
});
//脚本函数创建hello数据表
const run = async () => {
    await client.execute(`CREATE DATABASE IF NOT EXISTS ${DATABASE}`);
    await client.execute(`USE ${DATABASE}`);
    await client.execute(`DROP TABLE IF EXISTS ${TABLE}`);
    await client.execute(`
      CREATE TABLE ${TABLE} (
          id int(11) NOT NULL AUTO_INCREMENT,
          name varchar(100) NOT NULL,
          PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `);
}; 
run(); 
export default client;

