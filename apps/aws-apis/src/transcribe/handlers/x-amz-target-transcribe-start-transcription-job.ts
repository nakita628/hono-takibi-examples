import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeStartTranscriptionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeStartTranscriptionJobHandler = app.openapi(
  postXAmzTargetTranscribeStartTranscriptionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
