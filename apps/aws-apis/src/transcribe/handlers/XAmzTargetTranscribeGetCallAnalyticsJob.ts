import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeGetCallAnalyticsJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeGetCallAnalyticsJobHandler = app.openapi(
  postXAmzTargetTranscribeGetCallAnalyticsJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
