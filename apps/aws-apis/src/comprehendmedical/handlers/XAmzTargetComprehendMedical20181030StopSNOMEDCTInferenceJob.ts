import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
