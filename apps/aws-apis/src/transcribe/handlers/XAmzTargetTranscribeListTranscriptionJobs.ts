import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListTranscriptionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeListTranscriptionJobsHandler = app.openapi(
  postXAmzTargetTranscribeListTranscriptionJobsRoute,
  (c) => {},
)
