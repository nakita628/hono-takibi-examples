import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeCreateVocabularyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeCreateVocabularyHandler = app.openapi(
  postXAmzTargetTranscribeCreateVocabularyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
