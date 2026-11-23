import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerListConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerListConnectionsHandler = app.openapi(
  postXAmzTargetAppRunnerListConnectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
