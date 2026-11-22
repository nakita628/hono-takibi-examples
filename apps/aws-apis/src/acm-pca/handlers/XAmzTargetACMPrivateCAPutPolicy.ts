import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCAPutPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCAPutPolicyHandler = app.openapi(
  postXAmzTargetACMPrivateCAPutPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
