import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceGetDefaultRetentionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceGetDefaultRetentionPolicyHandler = app.openapi(
  postXAmzTargetWorkMailServiceGetDefaultRetentionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
