import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeFlywheelRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DescribeFlywheelHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeFlywheelRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
