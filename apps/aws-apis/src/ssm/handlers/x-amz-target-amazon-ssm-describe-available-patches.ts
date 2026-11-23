import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeAvailablePatchesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeAvailablePatchesHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeAvailablePatchesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
