import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListRecommendersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeListRecommendersHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListRecommendersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
