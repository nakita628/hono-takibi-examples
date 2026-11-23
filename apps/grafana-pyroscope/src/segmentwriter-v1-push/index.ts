import { OpenAPIHono } from '@hono/zod-openapi'
import { postSegmentwriterV1SegmentWriterServicePushRoute } from './routes'
import { postSegmentwriterV1SegmentWriterServicePushRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postSegmentwriterV1SegmentWriterServicePushRoute,
  postSegmentwriterV1SegmentWriterServicePushRouteHandler,
)

export default app
