import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDeleteRecommenderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDeleteRecommenderHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDeleteRecommenderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
