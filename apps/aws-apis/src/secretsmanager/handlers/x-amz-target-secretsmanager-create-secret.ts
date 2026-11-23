import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerCreateSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerCreateSecretHandler = app.openapi(
  postXAmzTargetSecretsmanagerCreateSecretRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
