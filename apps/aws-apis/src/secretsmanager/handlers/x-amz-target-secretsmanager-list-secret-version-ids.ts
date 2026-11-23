import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerListSecretVersionIdsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerListSecretVersionIdsHandler = app.openapi(
  postXAmzTargetSecretsmanagerListSecretVersionIdsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
