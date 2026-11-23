import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerUpdateSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerUpdateSecretHandler = app.openapi(
  postXAmzTargetSecretsmanagerUpdateSecretRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
