import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeDeleteVocabularyFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeDeleteVocabularyFilterHandler = app.openapi(
  postXAmzTargetTranscribeDeleteVocabularyFilterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
