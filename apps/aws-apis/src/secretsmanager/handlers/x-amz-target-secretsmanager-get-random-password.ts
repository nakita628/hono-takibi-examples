import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerGetRandomPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerGetRandomPasswordHandler = app.openapi(
  postXAmzTargetSecretsmanagerGetRandomPasswordRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
