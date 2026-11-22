import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeStartMedicalTranscriptionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeStartMedicalTranscriptionJobHandler = app.openapi(
  postXAmzTargetTranscribeStartMedicalTranscriptionJobRoute,
  (c) => {},
)
