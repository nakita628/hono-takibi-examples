import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListCrawlersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListCrawlersHandler = app.openapi(
  postXAmzTargetAWSGlueListCrawlersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
