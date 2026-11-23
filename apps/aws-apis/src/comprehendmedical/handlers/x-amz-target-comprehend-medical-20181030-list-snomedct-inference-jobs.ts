import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030ListSnomedctInferenceJobsHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
