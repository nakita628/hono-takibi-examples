import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartCrawlerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueStartCrawlerHandler = app.openapi(
  postXAmzTargetAWSGlueStartCrawlerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
