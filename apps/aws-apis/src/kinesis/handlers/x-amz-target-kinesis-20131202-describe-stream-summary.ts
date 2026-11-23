import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202DescribeStreamSummaryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202DescribeStreamSummaryHandler = app.openapi(
  postXAmzTargetKinesis20131202DescribeStreamSummaryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
