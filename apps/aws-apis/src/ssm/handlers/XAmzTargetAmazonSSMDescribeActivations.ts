import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeActivationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMDescribeActivationsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeActivationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
