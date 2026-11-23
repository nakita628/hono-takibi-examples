import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerTagResourceHandler = app.openapi(
  postXAmzTargetAppRunnerTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
