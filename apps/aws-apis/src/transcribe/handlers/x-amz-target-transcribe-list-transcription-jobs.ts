import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListTranscriptionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeListTranscriptionJobsHandler = app.openapi(
  postXAmzTargetTranscribeListTranscriptionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
