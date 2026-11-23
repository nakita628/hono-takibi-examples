import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListMedicalTranscriptionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTranscribeListMedicalTranscriptionJobsHandler = app.openapi(
  postXAmzTargetTranscribeListMedicalTranscriptionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
