import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftDeleteScriptRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftDeleteScriptHandler = app.openapi(
  postXAmzTargetGameLiftDeleteScriptRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
