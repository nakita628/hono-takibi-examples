import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsHandler = app.openapi(
  postXAmzTargetComprehend20171127ListPiiEntitiesDetectionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
