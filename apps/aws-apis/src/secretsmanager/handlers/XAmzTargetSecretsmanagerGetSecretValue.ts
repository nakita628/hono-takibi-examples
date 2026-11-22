import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerGetSecretValueRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerGetSecretValueHandler = app.openapi(
  postXAmzTargetSecretsmanagerGetSecretValueRoute,
  (c) => {},
)
