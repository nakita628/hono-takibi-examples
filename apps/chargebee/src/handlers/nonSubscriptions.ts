import { OpenAPIHono } from '@hono/zod-openapi'
import { postNonSubscriptionsNonSubscriptionAppIdOneTimePurchaseRoute } from '../routes'

const app = new OpenAPIHono()

export const nonSubscriptionsHandler = app.openapi(
  postNonSubscriptionsNonSubscriptionAppIdOneTimePurchaseRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
