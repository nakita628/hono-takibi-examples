import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerRestoreSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerRestoreSecretHandler = app.openapi(
  postXAmzTargetSecretsmanagerRestoreSecretRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
