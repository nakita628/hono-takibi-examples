import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709DeleteWebhookRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709DeleteWebhookHandler = app.openapi(
  postXAmzTargetCodePipeline20150709DeleteWebhookRoute,
  (c) => {},
)
