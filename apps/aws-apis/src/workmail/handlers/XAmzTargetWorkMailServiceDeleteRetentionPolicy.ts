import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteRetentionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDeleteRetentionPolicyHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteRetentionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
