import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesis20131202DescribeStreamConsumerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesis20131202DescribeStreamConsumerHandler = app.openapi(
  postXAmzTargetKinesis20131202DescribeStreamConsumerRoute,
  (c) => {},
)
