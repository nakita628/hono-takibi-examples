import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerReplicateSecretToRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerReplicateSecretToRegionsHandler = app.openapi(
  postXAmzTargetSecretsmanagerReplicateSecretToRegionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
