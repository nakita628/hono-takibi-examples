import { OpenAPIHono } from '@hono/zod-openapi'
import { segmentwriterV1SegmentWriterServiceHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', segmentwriterV1SegmentWriterServiceHandler)

export default app
