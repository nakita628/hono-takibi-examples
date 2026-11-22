import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709ListWebhooksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709ListWebhooksHandler = app.openapi(
  postXAmzTargetCodePipeline20150709ListWebhooksRoute,
  (c) => {},
)
