import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerPauseServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerPauseServiceHandler = app.openapi(
  postXAmzTargetAppRunnerPauseServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
