import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSHealth20160804DescribeEventTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSHealth20160804DescribeEventTypesHandler = app.openapi(
  postXAmzTargetAWSHealth20160804DescribeEventTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
