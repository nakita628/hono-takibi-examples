import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101DeleteEventSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101DeleteEventSubscriptionHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101DeleteEventSubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
