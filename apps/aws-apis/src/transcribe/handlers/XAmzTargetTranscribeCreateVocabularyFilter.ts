import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeCreateVocabularyFilterRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeCreateVocabularyFilterHandler = app.openapi(
  postXAmzTargetTranscribeCreateVocabularyFilterRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
