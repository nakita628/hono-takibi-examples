import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerGetResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerGetResourcePolicyHandler = app.openapi(
  postXAmzTargetSecretsmanagerGetResourcePolicyRoute,
  (c) => {},
)
