import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeListTagsForResourceHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
