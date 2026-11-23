import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStopCrawlerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueStopCrawlerHandler = app.openapi(
  postXAmzTargetAWSGlueStopCrawlerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
