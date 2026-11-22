import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeSolutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDescribeSolutionHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeSolutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
