import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServiceGetKeyPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServiceGetKeyPolicyHandler = app.openapi(
  postXAmzTargetTrentServiceGetKeyPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
