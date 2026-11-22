import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListMedicalTranscriptionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeListMedicalTranscriptionJobsHandler = app.openapi(
  postXAmzTargetTranscribeListMedicalTranscriptionJobsRoute,
  (c) => {},
)
