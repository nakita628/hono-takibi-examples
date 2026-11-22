import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerUpdateSecretVersionStageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerUpdateSecretVersionStageHandler = app.openapi(
  postXAmzTargetSecretsmanagerUpdateSecretVersionStageRoute,
  (c) => {},
)
