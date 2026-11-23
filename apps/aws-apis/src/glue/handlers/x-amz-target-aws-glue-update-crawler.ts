import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateCrawlerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateCrawlerHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateCrawlerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
