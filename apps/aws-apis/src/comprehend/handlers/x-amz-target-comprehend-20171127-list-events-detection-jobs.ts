import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListEventsDetectionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127ListEventsDetectionJobsHandler = app.openapi(
  postXAmzTargetComprehend20171127ListEventsDetectionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
