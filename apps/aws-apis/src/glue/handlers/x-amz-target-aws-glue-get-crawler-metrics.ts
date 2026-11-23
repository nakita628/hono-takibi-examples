import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetCrawlerMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetCrawlerMetricsHandler = app.openapi(
  postXAmzTargetAWSGlueGetCrawlerMetricsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
