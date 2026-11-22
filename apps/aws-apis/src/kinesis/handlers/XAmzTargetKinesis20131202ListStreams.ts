import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202ListStreamsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202ListStreamsHandler = app.openapi(
  postXAmzTargetKinesis20131202ListStreamsRoute,
  (c) => {},
)
