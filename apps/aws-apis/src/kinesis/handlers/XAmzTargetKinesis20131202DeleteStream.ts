import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202DeleteStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202DeleteStreamHandler = app.openapi(
  postXAmzTargetKinesis20131202DeleteStreamRoute,
  (c) => {},
)
