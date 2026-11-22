import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCADeletePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCADeletePolicyHandler = app.openapi(
  postXAmzTargetACMPrivateCADeletePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
