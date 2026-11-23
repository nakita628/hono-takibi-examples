import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeGetTranscriptionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeGetTranscriptionJobHandler = app.openapi(
  postXAmzTargetTranscribeGetTranscriptionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
