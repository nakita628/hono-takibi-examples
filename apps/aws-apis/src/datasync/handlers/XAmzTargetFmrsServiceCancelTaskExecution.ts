import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCancelTaskExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceCancelTaskExecutionHandler = app.openapi(
  postXAmzTargetFmrsServiceCancelTaskExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
