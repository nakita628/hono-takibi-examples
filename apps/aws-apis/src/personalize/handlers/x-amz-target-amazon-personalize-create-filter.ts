import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeCreateFilterHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateFilterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
