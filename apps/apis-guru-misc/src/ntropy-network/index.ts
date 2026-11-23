import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassifierBusinessBatchIdRoute, getClassifierConsumerBatchIdRoute } from './routes'
import {
  getClassifierBusinessBatchIdRouteHandler,
  getClassifierConsumerBatchIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getClassifierBusinessBatchIdRoute, getClassifierBusinessBatchIdRouteHandler)
  .openapi(getClassifierConsumerBatchIdRoute, getClassifierConsumerBatchIdRouteHandler)

export default app
