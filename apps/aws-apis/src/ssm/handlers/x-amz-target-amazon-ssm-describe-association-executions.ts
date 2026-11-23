import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeAssociationExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeAssociationExecutionsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeAssociationExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
