import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetCrawlerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetCrawlerHandler = app.openapi(
  postXAmzTargetAWSGlueGetCrawlerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
