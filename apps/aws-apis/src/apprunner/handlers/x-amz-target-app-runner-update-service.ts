import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerUpdateServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAppRunnerUpdateServiceHandler = app.openapi(
  postXAmzTargetAppRunnerUpdateServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
