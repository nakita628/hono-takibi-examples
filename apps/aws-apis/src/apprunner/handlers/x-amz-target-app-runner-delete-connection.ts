import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDeleteConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerDeleteConnectionHandler = app.openapi(
  postXAmzTargetAppRunnerDeleteConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
