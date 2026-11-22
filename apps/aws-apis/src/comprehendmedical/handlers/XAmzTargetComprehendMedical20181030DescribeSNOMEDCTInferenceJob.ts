import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030DescribeSNOMEDCTInferenceJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
