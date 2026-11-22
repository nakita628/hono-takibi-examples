import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDynamoDB20120810UpdateTableReplicaAutoScalingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDynamoDB20120810UpdateTableReplicaAutoScalingHandler = app.openapi(
  postXAmzTargetDynamoDB20120810UpdateTableReplicaAutoScalingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
