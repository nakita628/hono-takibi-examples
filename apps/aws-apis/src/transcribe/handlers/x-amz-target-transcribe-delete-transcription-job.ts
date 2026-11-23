import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeDeleteTranscriptionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeDeleteTranscriptionJobHandler = app.openapi(
  postXAmzTargetTranscribeDeleteTranscriptionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
