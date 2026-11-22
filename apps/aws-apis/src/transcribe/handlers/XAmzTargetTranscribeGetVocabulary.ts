import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeGetVocabularyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeGetVocabularyHandler = app.openapi(
  postXAmzTargetTranscribeGetVocabularyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
