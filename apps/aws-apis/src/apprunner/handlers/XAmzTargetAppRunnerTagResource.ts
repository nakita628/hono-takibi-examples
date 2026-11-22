import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerTagResourceHandler = app.openapi(
  postXAmzTargetAppRunnerTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
