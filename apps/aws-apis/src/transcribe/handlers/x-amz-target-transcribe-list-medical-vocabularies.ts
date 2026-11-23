import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListMedicalVocabulariesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeListMedicalVocabulariesHandler = app.openapi(
  postXAmzTargetTranscribeListMedicalVocabulariesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
