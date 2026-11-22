import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerResumeServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerResumeServiceHandler = app.openapi(
  postXAmzTargetAppRunnerResumeServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
