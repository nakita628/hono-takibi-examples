import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202DescribeStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202DescribeStreamHandler = app.openapi(
  postXAmzTargetKinesis20131202DescribeStreamRoute,
  (c) => {},
)
