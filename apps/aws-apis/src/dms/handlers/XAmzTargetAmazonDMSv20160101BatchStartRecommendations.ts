import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101BatchStartRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonDMSv20160101BatchStartRecommendationsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101BatchStartRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
