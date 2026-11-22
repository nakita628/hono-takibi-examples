import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeAssociationExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeAssociationExecutionsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeAssociationExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
