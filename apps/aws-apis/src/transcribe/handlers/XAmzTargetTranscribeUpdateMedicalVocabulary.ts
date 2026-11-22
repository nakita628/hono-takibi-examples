import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeUpdateMedicalVocabularyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeUpdateMedicalVocabularyHandler = app.openapi(
  postXAmzTargetTranscribeUpdateMedicalVocabularyRoute,
  (c) => {},
)
