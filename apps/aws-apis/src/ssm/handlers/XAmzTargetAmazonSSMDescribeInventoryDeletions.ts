import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeInventoryDeletionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeInventoryDeletionsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeInventoryDeletionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
