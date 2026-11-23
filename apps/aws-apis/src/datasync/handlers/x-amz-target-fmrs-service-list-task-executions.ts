import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceListTaskExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceListTaskExecutionsHandler = app.openapi(
  postXAmzTargetFmrsServiceListTaskExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
