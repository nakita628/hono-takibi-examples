import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810DescribeTableReplicaAutoScalingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDynamoDb20120810DescribeTableReplicaAutoScalingHandler = app.openapi(
  postXAmzTargetDynamoDB20120810DescribeTableReplicaAutoScalingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
