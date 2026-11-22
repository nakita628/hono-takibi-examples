import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerCreateSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerCreateSecretHandler = app.openapi(
  postXAmzTargetSecretsmanagerCreateSecretRoute,
  (c) => {},
)
