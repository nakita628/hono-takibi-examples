import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeStartCallAnalyticsJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeStartCallAnalyticsJobHandler = app.openapi(
  postXAmzTargetTranscribeStartCallAnalyticsJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
