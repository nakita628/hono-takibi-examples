import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSecretsmanagerTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSecretsmanagerTagResourceHandler = app.openapi(
  postXAmzTargetSecretsmanagerTagResourceRoute,
  (c) => {},
)
