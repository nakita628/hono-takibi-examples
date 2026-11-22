import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStopCrawlerScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueStopCrawlerScheduleHandler = app.openapi(
  postXAmzTargetAWSGlueStopCrawlerScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
