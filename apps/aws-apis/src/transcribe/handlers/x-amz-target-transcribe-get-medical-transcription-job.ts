import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeGetMedicalTranscriptionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeGetMedicalTranscriptionJobHandler = app.openapi(
  postXAmzTargetTranscribeGetMedicalTranscriptionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
