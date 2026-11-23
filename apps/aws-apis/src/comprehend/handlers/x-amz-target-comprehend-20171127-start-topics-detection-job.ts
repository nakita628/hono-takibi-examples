import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StartTopicsDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127StartTopicsDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StartTopicsDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
