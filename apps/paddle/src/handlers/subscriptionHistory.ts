import { OpenAPIHono } from '@hono/zod-openapi'
import { getSubscriptionsSubscriptionIdHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriptionHistoryHandler = app.openapi(
  getSubscriptionsSubscriptionIdHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
