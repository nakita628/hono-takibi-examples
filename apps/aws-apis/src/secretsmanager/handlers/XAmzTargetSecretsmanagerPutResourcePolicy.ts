import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerPutResourcePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerPutResourcePolicyHandler = app.openapi(
  postXAmzTargetSecretsmanagerPutResourcePolicyRoute,
  (c) => {},
)
