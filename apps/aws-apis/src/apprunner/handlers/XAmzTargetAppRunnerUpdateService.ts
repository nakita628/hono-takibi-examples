import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerUpdateServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerUpdateServiceHandler = app.openapi(
  postXAmzTargetAppRunnerUpdateServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
