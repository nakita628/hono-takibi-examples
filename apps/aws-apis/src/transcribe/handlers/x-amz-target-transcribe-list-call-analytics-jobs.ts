import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListCallAnalyticsJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeListCallAnalyticsJobsHandler = app.openapi(
  postXAmzTargetTranscribeListCallAnalyticsJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
