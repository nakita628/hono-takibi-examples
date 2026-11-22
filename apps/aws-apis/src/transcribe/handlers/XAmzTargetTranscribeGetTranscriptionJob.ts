import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeGetTranscriptionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeGetTranscriptionJobHandler = app.openapi(
  postXAmzTargetTranscribeGetTranscriptionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
