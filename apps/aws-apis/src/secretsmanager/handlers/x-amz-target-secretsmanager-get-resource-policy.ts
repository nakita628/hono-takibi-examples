import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerGetResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerGetResourcePolicyHandler = app.openapi(
  postXAmzTargetSecretsmanagerGetResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
