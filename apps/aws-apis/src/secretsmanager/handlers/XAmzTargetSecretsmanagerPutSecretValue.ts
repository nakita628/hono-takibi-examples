import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerPutSecretValueRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerPutSecretValueHandler = app.openapi(
  postXAmzTargetSecretsmanagerPutSecretValueRoute,
  (c) => {},
)
