import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerUpdateSecretVersionStageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerUpdateSecretVersionStageHandler = app.openapi(
  postXAmzTargetSecretsmanagerUpdateSecretVersionStageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
