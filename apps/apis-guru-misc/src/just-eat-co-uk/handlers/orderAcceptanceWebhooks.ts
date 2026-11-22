import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAcceptanceRequestedRoute,
  postOrderAcceptedRoute,
  postOrderCancelledRoute,
  postOrderRejectedRoute,
  putRedeliveryRequestedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderAcceptanceWebhooksHandler = app
  .openapi(postAcceptanceRequestedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderAcceptedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderCancelledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderRejectedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRedeliveryRequestedRoute, (c) => {
    throw new Error('Not implemented')
  })
