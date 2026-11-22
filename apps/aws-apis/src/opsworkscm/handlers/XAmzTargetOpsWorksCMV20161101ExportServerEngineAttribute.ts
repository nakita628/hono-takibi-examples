import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101ExportServerEngineAttributeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorksCMV20161101ExportServerEngineAttributeHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101ExportServerEngineAttributeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
