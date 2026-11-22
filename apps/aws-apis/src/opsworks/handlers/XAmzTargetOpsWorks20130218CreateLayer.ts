import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218CreateLayerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218CreateLayerHandler = app.openapi(
  postXAmzTargetOpsWorks20130218CreateLayerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
