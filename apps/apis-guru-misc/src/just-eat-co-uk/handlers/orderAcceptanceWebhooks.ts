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
  .openapi(postAcceptanceRequestedRoute, (c) => {})
  .openapi(postOrderAcceptedRoute, (c) => {})
  .openapi(postOrderCancelledRoute, (c) => {})
  .openapi(postOrderRejectedRoute, (c) => {})
  .openapi(putRedeliveryRequestedRoute, (c) => {})
