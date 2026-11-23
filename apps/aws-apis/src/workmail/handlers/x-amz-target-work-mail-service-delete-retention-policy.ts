import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteRetentionPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDeleteRetentionPolicyHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteRetentionPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
