import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeAssociationExecutionTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeAssociationExecutionTargetsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeAssociationExecutionTargetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
