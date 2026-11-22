import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetCrawlerMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetCrawlerMetricsHandler = app.openapi(
  postXAmzTargetAWSGlueGetCrawlerMetricsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
