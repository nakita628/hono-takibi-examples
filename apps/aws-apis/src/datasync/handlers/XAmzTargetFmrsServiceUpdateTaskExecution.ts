import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceUpdateTaskExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceUpdateTaskExecutionHandler = app.openapi(
  postXAmzTargetFmrsServiceUpdateTaskExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
