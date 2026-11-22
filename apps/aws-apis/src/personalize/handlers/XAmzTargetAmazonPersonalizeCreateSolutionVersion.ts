import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateSolutionVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeCreateSolutionVersionHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateSolutionVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
