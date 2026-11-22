import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerCreateConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerCreateConnectionHandler = app.openapi(
  postXAmzTargetAppRunnerCreateConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
