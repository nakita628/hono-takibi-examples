import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerPauseServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerPauseServiceHandler = app.openapi(
  postXAmzTargetAppRunnerPauseServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
