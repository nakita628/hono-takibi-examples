import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServicePutRetentionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServicePutRetentionPolicyHandler = app.openapi(
  postXAmzTargetWorkMailServicePutRetentionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
