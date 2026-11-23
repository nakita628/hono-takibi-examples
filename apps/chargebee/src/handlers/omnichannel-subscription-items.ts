import { OpenAPIHono } from '@hono/zod-openapi'
import { getOmnichannelSubscriptionItemsOmnichannelSubscriptionItemIdScheduledChangesRoute } from '../routes'

const app = new OpenAPIHono()

export const omnichannelSubscriptionItemsHandler = app.openapi(
  getOmnichannelSubscriptionItemsOmnichannelSubscriptionItemIdScheduledChangesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
