import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeAssociationHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
