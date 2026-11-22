import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeStartCallAnalyticsJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeStartCallAnalyticsJobHandler = app.openapi(
  postXAmzTargetTranscribeStartCallAnalyticsJobRoute,
  (c) => {},
)
