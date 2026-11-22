import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerListSecretVersionIdsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerListSecretVersionIdsHandler = app.openapi(
  postXAmzTargetSecretsmanagerListSecretVersionIdsRoute,
  (c) => {},
)
