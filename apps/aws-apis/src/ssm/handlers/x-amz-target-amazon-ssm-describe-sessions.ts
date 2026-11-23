import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMDescribeSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmDescribeSessionsHandler = app.openapi(
  postXAmzTargetAmazonSSMDescribeSessionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
