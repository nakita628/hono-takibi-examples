import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeGetMedicalTranscriptionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeGetMedicalTranscriptionJobHandler = app.openapi(
  postXAmzTargetTranscribeGetMedicalTranscriptionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
