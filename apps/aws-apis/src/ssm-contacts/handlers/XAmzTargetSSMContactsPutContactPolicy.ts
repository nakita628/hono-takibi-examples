import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSSMContactsPutContactPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSSMContactsPutContactPolicyHandler = app.openapi(
  postXAmzTargetSSMContactsPutContactPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
