import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDeleteFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDeleteFilterHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDeleteFilterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
