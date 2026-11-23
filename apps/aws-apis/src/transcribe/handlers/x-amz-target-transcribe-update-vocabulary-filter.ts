import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeUpdateVocabularyFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeUpdateVocabularyFilterHandler = app.openapi(
  postXAmzTargetTranscribeUpdateVocabularyFilterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
