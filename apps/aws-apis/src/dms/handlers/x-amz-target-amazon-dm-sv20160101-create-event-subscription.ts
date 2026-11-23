import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101CreateEventSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101CreateEventSubscriptionHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101CreateEventSubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
