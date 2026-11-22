import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerDeleteSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerDeleteSecretHandler = app.openapi(
  postXAmzTargetSecretsmanagerDeleteSecretRoute,
  (c) => {},
)
