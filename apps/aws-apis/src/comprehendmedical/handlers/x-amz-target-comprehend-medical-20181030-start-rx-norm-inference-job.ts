import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030StartRxNormInferenceJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030StartRxNormInferenceJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030StartRxNormInferenceJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
