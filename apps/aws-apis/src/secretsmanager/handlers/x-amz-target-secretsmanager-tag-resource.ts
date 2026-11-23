import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerTagResourceHandler = app.openapi(
  postXAmzTargetSecretsmanagerTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
