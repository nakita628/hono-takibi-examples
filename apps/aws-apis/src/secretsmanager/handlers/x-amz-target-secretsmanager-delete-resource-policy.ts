import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerDeleteResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerDeleteResourcePolicyHandler = app.openapi(
  postXAmzTargetSecretsmanagerDeleteResourcePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
