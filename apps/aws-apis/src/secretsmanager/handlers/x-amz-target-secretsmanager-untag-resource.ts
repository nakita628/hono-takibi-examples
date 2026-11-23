import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSecretsmanagerUntagResourceHandler = app.openapi(
  postXAmzTargetSecretsmanagerUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
