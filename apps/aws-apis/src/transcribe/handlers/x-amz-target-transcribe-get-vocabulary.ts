import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeGetVocabularyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeGetVocabularyHandler = app.openapi(
  postXAmzTargetTranscribeGetVocabularyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
