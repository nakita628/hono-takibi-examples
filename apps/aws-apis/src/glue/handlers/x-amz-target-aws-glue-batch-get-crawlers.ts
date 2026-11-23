import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchGetCrawlersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueBatchGetCrawlersHandler = app.openapi(
  postXAmzTargetAWSGlueBatchGetCrawlersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
