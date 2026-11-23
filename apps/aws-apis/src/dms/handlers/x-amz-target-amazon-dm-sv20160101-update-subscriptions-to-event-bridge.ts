import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridgeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101UpdateSubscriptionsToEventBridgeHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101UpdateSubscriptionsToEventBridgeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
