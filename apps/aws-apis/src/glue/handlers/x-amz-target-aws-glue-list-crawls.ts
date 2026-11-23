import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListCrawlsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListCrawlsHandler = app.openapi(
  postXAmzTargetAWSGlueListCrawlsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
