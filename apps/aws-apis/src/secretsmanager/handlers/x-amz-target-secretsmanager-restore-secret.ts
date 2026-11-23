import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerRestoreSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerRestoreSecretHandler = app.openapi(
  postXAmzTargetSecretsmanagerRestoreSecretRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
