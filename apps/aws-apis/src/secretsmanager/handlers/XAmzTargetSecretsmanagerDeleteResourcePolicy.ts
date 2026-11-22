import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerDeleteResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerDeleteResourcePolicyHandler = app.openapi(
  postXAmzTargetSecretsmanagerDeleteResourcePolicyRoute,
  (c) => {},
)
