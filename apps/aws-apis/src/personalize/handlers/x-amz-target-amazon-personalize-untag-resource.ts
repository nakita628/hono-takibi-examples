import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeUntagResourceHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
