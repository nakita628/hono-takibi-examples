import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DescribeTimeToLiveRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810DescribeTimeToLiveHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DescribeTimeToLiveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
