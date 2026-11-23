import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postChangeStatusRoute,
  postCheckBalanceRoute,
  postIssueRoute,
  postLoadRoute,
  postMergeBalanceRoute,
  postVoidTransactionRoute,
} from './routes'
import {
  postChangeStatusRouteHandler,
  postCheckBalanceRouteHandler,
  postIssueRouteHandler,
  postLoadRouteHandler,
  postMergeBalanceRouteHandler,
  postVoidTransactionRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postChangeStatusRoute, postChangeStatusRouteHandler)
  .openapi(postCheckBalanceRoute, postCheckBalanceRouteHandler)
  .openapi(postIssueRoute, postIssueRouteHandler)
  .openapi(postLoadRoute, postLoadRouteHandler)
  .openapi(postMergeBalanceRoute, postMergeBalanceRouteHandler)
  .openapi(postVoidTransactionRoute, postVoidTransactionRouteHandler)

export default app
