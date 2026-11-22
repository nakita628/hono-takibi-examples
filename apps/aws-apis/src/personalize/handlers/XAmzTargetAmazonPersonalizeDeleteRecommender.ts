import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDeleteRecommenderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDeleteRecommenderHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDeleteRecommenderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
