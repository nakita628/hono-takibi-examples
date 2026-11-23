import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeDeleteMedicalTranscriptionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeDeleteMedicalTranscriptionJobHandler = app.openapi(
  postXAmzTargetTranscribeDeleteMedicalTranscriptionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
