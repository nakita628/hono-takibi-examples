import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceListTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceListTasksHandler = app.openapi(
  postXAmzTargetFmrsServiceListTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
