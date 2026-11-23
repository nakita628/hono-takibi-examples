import { OpenAPIHono } from '@hono/zod-openapi'
import {
  batchExecuteHandler,
  beginTransactionHandler,
  commitTransactionHandler,
  executeHandler,
  executeSqlHandler,
  rollbackTransactionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', batchExecuteHandler)
  .route('/', beginTransactionHandler)
  .route('/', commitTransactionHandler)
  .route('/', executeSqlHandler)
  .route('/', executeHandler)
  .route('/', rollbackTransactionHandler)

export default app
