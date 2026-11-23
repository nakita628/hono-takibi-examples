import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeStartRecommenderRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeStartRecommenderHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeStartRecommenderRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
