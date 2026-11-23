import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeGetVocabularyFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeGetVocabularyFilterHandler = app.openapi(
  postXAmzTargetTranscribeGetVocabularyFilterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
