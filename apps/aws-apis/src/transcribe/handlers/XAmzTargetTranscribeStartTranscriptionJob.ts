import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeStartTranscriptionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeStartTranscriptionJobHandler = app.openapi(
  postXAmzTargetTranscribeStartTranscriptionJobRoute,
  (c) => {},
)
