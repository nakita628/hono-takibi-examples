import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateScriptRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGameLiftUpdateScriptHandler = app.openapi(
  postXAmzTargetGameLiftUpdateScriptRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
