import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeGetMedicalVocabularyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeGetMedicalVocabularyHandler = app.openapi(
  postXAmzTargetTranscribeGetMedicalVocabularyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
