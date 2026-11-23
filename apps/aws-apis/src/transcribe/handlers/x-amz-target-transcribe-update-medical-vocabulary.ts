import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeUpdateMedicalVocabularyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeUpdateMedicalVocabularyHandler = app.openapi(
  postXAmzTargetTranscribeUpdateMedicalVocabularyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
