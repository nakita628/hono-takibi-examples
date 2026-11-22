import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeDeleteMedicalVocabularyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeDeleteMedicalVocabularyHandler = app.openapi(
  postXAmzTargetTranscribeDeleteMedicalVocabularyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
