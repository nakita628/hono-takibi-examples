import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerListSecretsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerListSecretsHandler = app.openapi(
  postXAmzTargetSecretsmanagerListSecretsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
