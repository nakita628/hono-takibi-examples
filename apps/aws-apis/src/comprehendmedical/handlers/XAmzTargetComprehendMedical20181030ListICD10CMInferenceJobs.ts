import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
