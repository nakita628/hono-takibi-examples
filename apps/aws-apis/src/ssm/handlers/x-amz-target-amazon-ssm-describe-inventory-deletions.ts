import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeInventoryDeletionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeInventoryDeletionsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeInventoryDeletionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
