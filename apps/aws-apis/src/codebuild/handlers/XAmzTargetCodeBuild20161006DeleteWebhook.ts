import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006DeleteWebhookRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeBuild20161006DeleteWebhookHandler = app.openapi(
  postXAmzTargetCodeBuild20161006DeleteWebhookRoute,
  (c) => {},
)
