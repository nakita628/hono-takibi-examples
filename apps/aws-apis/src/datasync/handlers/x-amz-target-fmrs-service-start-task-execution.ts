import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceStartTaskExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceStartTaskExecutionHandler = app.openapi(
  postXAmzTargetFmrsServiceStartTaskExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
