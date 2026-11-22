import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeUpdateRecommenderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeUpdateRecommenderHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeUpdateRecommenderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
