import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListVocabulariesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeListVocabulariesHandler = app.openapi(
  postXAmzTargetTranscribeListVocabulariesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
