import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerValidateResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerValidateResourcePolicyHandler = app.openapi(
  postXAmzTargetSecretsmanagerValidateResourcePolicyRoute,
  (c) => {},
)
