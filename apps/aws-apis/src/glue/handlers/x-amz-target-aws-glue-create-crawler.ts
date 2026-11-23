import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateCrawlerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreateCrawlerHandler = app.openapi(
  postXAmzTargetAWSGlueCreateCrawlerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
