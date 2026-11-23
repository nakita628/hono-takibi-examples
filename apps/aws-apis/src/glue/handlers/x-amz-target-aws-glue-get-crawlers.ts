import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetCrawlersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetCrawlersHandler = app.openapi(
  postXAmzTargetAWSGlueGetCrawlersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
