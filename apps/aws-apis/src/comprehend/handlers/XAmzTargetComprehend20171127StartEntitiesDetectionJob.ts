import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StartEntitiesDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127StartEntitiesDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StartEntitiesDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
