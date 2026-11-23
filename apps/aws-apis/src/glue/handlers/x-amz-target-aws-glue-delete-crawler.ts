import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteCrawlerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteCrawlerHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteCrawlerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
