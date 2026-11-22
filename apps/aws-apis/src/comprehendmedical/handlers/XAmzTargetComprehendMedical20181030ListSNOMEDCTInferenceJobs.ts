import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030ListSNOMEDCTInferenceJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
