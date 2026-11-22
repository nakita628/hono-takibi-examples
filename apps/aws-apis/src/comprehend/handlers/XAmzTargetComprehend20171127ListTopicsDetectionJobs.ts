import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListTopicsDetectionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127ListTopicsDetectionJobsHandler = app.openapi(
  postXAmzTargetComprehend20171127ListTopicsDetectionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
