import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDescribeScriptRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftDescribeScriptHandler = app.openapi(
  postXAmzTargetGameLiftDescribeScriptRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
