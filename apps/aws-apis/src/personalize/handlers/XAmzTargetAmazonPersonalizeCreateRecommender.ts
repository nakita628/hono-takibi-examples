import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateRecommenderRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeCreateRecommenderHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateRecommenderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
