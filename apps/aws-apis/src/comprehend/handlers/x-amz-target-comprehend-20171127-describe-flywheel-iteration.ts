import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeFlywheelIterationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127DescribeFlywheelIterationHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeFlywheelIterationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
