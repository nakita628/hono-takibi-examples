import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StopEventsDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127StopEventsDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StopEventsDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
