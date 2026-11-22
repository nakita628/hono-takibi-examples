import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeUpdateVocabularyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeUpdateVocabularyHandler = app.openapi(
  postXAmzTargetTranscribeUpdateVocabularyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
