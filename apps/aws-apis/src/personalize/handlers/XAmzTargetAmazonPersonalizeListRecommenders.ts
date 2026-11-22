import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListRecommendersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeListRecommendersHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListRecommendersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
