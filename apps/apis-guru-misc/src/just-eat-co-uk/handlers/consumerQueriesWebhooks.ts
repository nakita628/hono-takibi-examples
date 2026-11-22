import { OpenAPIHono } from '@hono/zod-openapi'
import { postLateOrderCompensationQueryRoute, postLateOrderQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const consumerQueriesWebhooksHandler = app
  .openapi(postLateOrderCompensationQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLateOrderQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
