import { OpenAPIHono } from '@hono/zod-openapi'
import { postSegmentwriterV1SegmentWriterServicePushRoute } from '../routes'

const app = new OpenAPIHono()

export const segmentwriterV1SegmentWriterServiceHandler = app.openapi(
  postSegmentwriterV1SegmentWriterServicePushRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
