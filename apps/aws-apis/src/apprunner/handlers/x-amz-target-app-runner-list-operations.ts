import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerListOperationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerListOperationsHandler = app.openapi(
  postXAmzTargetAppRunnerListOperationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
