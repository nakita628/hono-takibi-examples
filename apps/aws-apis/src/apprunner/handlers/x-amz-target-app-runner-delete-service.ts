import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDeleteServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerDeleteServiceHandler = app.openapi(
  postXAmzTargetAppRunnerDeleteServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
