import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeEventsDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127DescribeEventsDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeEventsDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
