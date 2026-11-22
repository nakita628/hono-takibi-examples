import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceListTaskExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceListTaskExecutionsHandler = app.openapi(
  postXAmzTargetFmrsServiceListTaskExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
