import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDeleteFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDeleteFilterHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDeleteFilterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
