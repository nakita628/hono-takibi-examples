import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubscriptionsSubscriptionIdReauthorizeRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriptionsSubscriptionActionsHandler = app.openapi(
  postSubscriptionsSubscriptionIdReauthorizeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
