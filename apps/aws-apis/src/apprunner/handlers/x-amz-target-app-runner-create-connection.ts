import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerCreateConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerCreateConnectionHandler = app.openapi(
  postXAmzTargetAppRunnerCreateConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
