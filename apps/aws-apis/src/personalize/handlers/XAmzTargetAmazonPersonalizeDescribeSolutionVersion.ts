import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeSolutionVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDescribeSolutionVersionHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeSolutionVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
