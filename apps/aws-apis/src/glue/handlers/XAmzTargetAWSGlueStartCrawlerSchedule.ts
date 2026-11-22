import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartCrawlerScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueStartCrawlerScheduleHandler = app.openapi(
  postXAmzTargetAWSGlueStartCrawlerScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
