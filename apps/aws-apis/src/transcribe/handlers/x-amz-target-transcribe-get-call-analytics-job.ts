import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeGetCallAnalyticsJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeGetCallAnalyticsJobHandler = app.openapi(
  postXAmzTargetTranscribeGetCallAnalyticsJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
