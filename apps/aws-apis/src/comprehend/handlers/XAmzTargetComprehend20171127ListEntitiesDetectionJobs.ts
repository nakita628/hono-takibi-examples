import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListEntitiesDetectionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127ListEntitiesDetectionJobsHandler = app.openapi(
  postXAmzTargetComprehend20171127ListEntitiesDetectionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
