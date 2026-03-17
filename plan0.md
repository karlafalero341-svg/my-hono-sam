计划：将 Hono 与 AWS Lambda 和 PostgreSQL 集成
TL;DR：设置 Drizzle ORM 用户表架构，为 Lambda 配置连接池，切换到 hono/aws-lambda 适配器，添加 SAM 部署配置，并实现用户 CRUD API 端点。

步骤

在 app/db/schema.ts 中定义用户表的 Drizzle 架构
创建 drizzle.config.ts 用于数据库迁移
创建数据库连接模块 (app/db/connection.ts)，使用 pg.Pool 进行连接池化
更新 app/db/lambda.ts，使用 hono/aws-lambda 适配器而不是 vercel
添加数据库连接的环境变量（通过 AWS Secrets Manager 的 DATABASE_URL）
在 route.ts 中实现用户 CRUD 路由（GET、POST、PUT、DELETE /users）
创建 SAM template.yaml 用于 Lambda 部署配置
运行 Drizzle 迁移以设置数据库架构
相关文件

app/db/schema.ts — 新建 Drizzle 架构，定义用户表
drizzle.config.ts — 新建 Drizzle Kit 迁移配置
app/db/connection.ts — 新建连接模块，使用池化的 PostgreSQL 客户端
lambda.ts — 更新为使用 aws-lambda 适配器
route.ts — 添加用户 CRUD 端点
template.yaml — 新建 SAM 模板用于部署
验证

运行 drizzle-kit generate 创建迁移文件
使用简单查询本地测试数据库连接
通过 SAM 部署到 AWS Lambda，并使用 curl 或 Postman 测试 API 端点
通过检查 CloudWatch 日志验证连接池是否正常工作




