import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202DescribeStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesis20131202DescribeStreamHandler = app.openapi(
  postXAmzTargetKinesis20131202DescribeStreamRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
