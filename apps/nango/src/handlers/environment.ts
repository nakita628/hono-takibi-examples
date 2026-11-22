import { OpenAPIHono } from '@hono/zod-openapi'
import { postEnvironmentWebhookSigningKeyRotateRoute } from '../routes'

const app = new OpenAPIHono()

export const environmentHandler = app.openapi(
  postEnvironmentWebhookSigningKeyRotateRoute,
  (c) => {},
)
