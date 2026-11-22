import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftCreateScriptRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftCreateScriptHandler = app.openapi(
  postXAmzTargetGameLiftCreateScriptRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
