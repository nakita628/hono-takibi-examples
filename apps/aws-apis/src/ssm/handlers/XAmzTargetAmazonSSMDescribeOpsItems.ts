import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeOpsItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeOpsItemsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeOpsItemsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
