import { OpenAPIHono } from '@hono/zod-openapi'
import {
  BatchExecuteHandler,
  BeginTransactionHandler,
  CommitTransactionHandler,
  ExecuteHandler,
  ExecuteSqlHandler,
  RollbackTransactionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', BatchExecuteHandler)
  .route('/', BeginTransactionHandler)
  .route('/', CommitTransactionHandler)
  .route('/', ExecuteSqlHandler)
  .route('/', ExecuteHandler)
  .route('/', RollbackTransactionHandler)

export default app
