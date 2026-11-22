import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateScriptRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftUpdateScriptHandler = app.openapi(
  postXAmzTargetGameLiftUpdateScriptRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
