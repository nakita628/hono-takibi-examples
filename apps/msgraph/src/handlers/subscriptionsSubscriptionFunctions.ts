import { OpenAPIHono } from '@hono/zod-openapi'
import { getSubscriptionsGetVapidPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriptionsSubscriptionFunctionsHandler = app.openapi(
  getSubscriptionsGetVapidPublicKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
