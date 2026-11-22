import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202DescribeStreamSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202DescribeStreamSummaryHandler = app.openapi(
  postXAmzTargetKinesis20131202DescribeStreamSummaryRoute,
  (c) => {},
)
