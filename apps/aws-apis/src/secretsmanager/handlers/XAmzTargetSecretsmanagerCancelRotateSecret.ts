import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerCancelRotateSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerCancelRotateSecretHandler = app.openapi(
  postXAmzTargetSecretsmanagerCancelRotateSecretRoute,
  (c) => {},
)
