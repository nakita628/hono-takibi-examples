import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeDeleteVocabularyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeDeleteVocabularyHandler = app.openapi(
  postXAmzTargetTranscribeDeleteVocabularyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
