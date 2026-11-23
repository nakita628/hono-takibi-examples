import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030ListRxNormInferenceJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030ListRxNormInferenceJobsHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030ListRxNormInferenceJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
