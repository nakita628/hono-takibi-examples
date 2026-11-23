import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeTopicsDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127DescribeTopicsDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeTopicsDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
