import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListMedicalVocabulariesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeListMedicalVocabulariesHandler = app.openapi(
  postXAmzTargetTranscribeListMedicalVocabulariesRoute,
  (c) => {},
)
