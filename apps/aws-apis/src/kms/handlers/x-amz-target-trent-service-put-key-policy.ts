import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTrentServicePutKeyPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetTrentServicePutKeyPolicyHandler = app.openapi(
  postXAmzTargetTrentServicePutKeyPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
