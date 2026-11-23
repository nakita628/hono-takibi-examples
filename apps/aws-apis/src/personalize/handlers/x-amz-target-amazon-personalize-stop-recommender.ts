import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeStopRecommenderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeStopRecommenderHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeStopRecommenderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
