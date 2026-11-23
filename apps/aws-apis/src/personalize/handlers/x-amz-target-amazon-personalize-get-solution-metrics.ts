import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeGetSolutionMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeGetSolutionMetricsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeGetSolutionMetricsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
