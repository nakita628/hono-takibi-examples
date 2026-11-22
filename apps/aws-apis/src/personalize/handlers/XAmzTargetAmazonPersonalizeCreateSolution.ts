import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateSolutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeCreateSolutionHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateSolutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
