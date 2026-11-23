import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerDeleteSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerDeleteSecretHandler = app.openapi(
  postXAmzTargetSecretsmanagerDeleteSecretRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
