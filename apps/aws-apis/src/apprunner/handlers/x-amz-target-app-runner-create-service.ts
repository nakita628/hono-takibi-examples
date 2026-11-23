import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerCreateServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerCreateServiceHandler = app.openapi(
  postXAmzTargetAppRunnerCreateServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
