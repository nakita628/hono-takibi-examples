import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeDeleteMedicalTranscriptionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeDeleteMedicalTranscriptionJobHandler = app.openapi(
  postXAmzTargetTranscribeDeleteMedicalTranscriptionJobRoute,
  (c) => {},
)
