import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateCrawlerScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateCrawlerScheduleHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateCrawlerScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
