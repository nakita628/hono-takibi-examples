import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030StartSNOMEDCTInferenceJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
