import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceStartTaskExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceStartTaskExecutionHandler = app.openapi(
  postXAmzTargetFmrsServiceStartTaskExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
