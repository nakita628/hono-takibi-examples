import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDMSv20160101StartRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDmSv20160101StartRecommendationsHandler = app.openapi(
  postXAmzTargetAmazonDMSv20160101StartRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
