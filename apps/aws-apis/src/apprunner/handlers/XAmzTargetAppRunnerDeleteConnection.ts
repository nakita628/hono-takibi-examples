import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDeleteConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerDeleteConnectionHandler = app.openapi(
  postXAmzTargetAppRunnerDeleteConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
