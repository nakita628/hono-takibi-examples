import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerPutSecretValueRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerPutSecretValueHandler = app.openapi(
  postXAmzTargetSecretsmanagerPutSecretValueRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
