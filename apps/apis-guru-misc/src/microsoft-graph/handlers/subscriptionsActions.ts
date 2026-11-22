import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriptionsActionsHandler = app.openapi(
  postSubscriptionsSubscriptionIdMicrosoftGraphReauthorizeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
