import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerDescribeServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerDescribeServiceHandler = app.openapi(
  postXAmzTargetAppRunnerDescribeServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
