import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServicePutKeyPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTrentServicePutKeyPolicyHandler = app.openapi(
  postXAmzTargetTrentServicePutKeyPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
