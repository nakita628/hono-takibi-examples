import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartCrawlerScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueStartCrawlerScheduleHandler = app.openapi(
  postXAmzTargetAWSGlueStartCrawlerScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
