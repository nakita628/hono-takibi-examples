import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StopPiiEntitiesDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127StopPiiEntitiesDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StopPiiEntitiesDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
