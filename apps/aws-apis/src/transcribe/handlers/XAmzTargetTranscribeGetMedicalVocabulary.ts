import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeGetMedicalVocabularyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeGetMedicalVocabularyHandler = app.openapi(
  postXAmzTargetTranscribeGetMedicalVocabularyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
