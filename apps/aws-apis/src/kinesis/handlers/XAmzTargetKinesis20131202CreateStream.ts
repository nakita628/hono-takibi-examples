import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202CreateStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202CreateStreamHandler = app.openapi(
  postXAmzTargetKinesis20131202CreateStreamRoute,
  (c) => {},
)
