import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListCallAnalyticsJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeListCallAnalyticsJobsHandler = app.openapi(
  postXAmzTargetTranscribeListCallAnalyticsJobsRoute,
  (c) => {},
)
