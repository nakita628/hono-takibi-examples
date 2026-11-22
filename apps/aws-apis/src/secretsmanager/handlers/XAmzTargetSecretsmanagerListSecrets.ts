import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerListSecretsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerListSecretsHandler = app.openapi(
  postXAmzTargetSecretsmanagerListSecretsRoute,
  (c) => {},
)
