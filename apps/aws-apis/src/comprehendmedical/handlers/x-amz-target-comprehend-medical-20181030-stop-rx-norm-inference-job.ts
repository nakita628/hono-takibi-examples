import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030StopRxNormInferenceJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030StopRxNormInferenceJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030StopRxNormInferenceJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
