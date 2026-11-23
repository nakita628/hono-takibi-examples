import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerUntagResourceHandler = app.openapi(
  postXAmzTargetAppRunnerUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
