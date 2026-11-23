import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBatchExecuteRoute,
  postBeginTransactionRoute,
  postCommitTransactionRoute,
  postExecuteRoute,
  postExecuteSqlRoute,
  postRollbackTransactionRoute,
} from './routes'
import {
  postBatchExecuteRouteHandler,
  postBeginTransactionRouteHandler,
  postCommitTransactionRouteHandler,
  postExecuteRouteHandler,
  postExecuteSqlRouteHandler,
  postRollbackTransactionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBatchExecuteRoute, postBatchExecuteRouteHandler)
  .openapi(postBeginTransactionRoute, postBeginTransactionRouteHandler)
  .openapi(postCommitTransactionRoute, postCommitTransactionRouteHandler)
  .openapi(postExecuteSqlRoute, postExecuteSqlRouteHandler)
  .openapi(postExecuteRoute, postExecuteRouteHandler)
  .openapi(postRollbackTransactionRoute, postRollbackTransactionRouteHandler)

export default app
