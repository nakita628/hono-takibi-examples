import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRekognitionServiceListProjectPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRekognitionServiceListProjectPoliciesHandler = app.openapi(
  postXAmzTargetRekognitionServiceListProjectPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
