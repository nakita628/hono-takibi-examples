import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StopEntitiesDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127StopEntitiesDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StopEntitiesDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
