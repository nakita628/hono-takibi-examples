import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeDeleteCallAnalyticsJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeDeleteCallAnalyticsJobHandler = app.openapi(
  postXAmzTargetTranscribeDeleteCallAnalyticsJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
