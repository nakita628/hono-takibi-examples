import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerGetSecretValueRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerGetSecretValueHandler = app.openapi(
  postXAmzTargetSecretsmanagerGetSecretValueRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
