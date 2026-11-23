import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeSolutionVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDescribeSolutionVersionHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeSolutionVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
