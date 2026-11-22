import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGluePutResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGluePutResourcePolicyHandler = app.openapi(
  postXAmzTargetAWSGluePutResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
