import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCAGetPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAcmPrivateCaGetPolicyHandler = app.openapi(
  postXAmzTargetACMPrivateCAGetPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
