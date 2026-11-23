import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StartPiiEntitiesDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127StartPiiEntitiesDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StartPiiEntitiesDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
