import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeCreateMedicalVocabularyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeCreateMedicalVocabularyHandler = app.openapi(
  postXAmzTargetTranscribeCreateMedicalVocabularyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
