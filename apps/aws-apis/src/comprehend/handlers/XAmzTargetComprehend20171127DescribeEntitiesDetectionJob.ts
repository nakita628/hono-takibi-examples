import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeEntitiesDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DescribeEntitiesDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeEntitiesDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
