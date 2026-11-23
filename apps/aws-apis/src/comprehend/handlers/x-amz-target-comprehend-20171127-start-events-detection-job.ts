import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StartEventsDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127StartEventsDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StartEventsDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
