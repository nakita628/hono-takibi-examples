import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030StopSnomedctInferenceJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030StopSNOMEDCTInferenceJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
