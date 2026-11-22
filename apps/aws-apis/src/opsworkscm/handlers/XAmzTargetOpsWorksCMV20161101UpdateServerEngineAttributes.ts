import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributesHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
