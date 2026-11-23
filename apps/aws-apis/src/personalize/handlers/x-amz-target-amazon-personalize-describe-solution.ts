import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDescribeSolutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeDescribeSolutionHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDescribeSolutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
