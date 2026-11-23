import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeStartMedicalTranscriptionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeStartMedicalTranscriptionJobHandler = app.openapi(
  postXAmzTargetTranscribeStartMedicalTranscriptionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
