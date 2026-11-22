import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerUpdateSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerUpdateSecretHandler = app.openapi(
  postXAmzTargetSecretsmanagerUpdateSecretRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
