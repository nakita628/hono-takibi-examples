import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerRotateSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerRotateSecretHandler = app.openapi(
  postXAmzTargetSecretsmanagerRotateSecretRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
