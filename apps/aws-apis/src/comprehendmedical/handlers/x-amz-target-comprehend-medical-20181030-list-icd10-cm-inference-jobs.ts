import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030ListIcd10CmInferenceJobsHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030ListICD10CMInferenceJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
