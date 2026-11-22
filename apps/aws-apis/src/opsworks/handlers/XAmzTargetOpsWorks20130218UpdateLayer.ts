import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218UpdateLayerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218UpdateLayerHandler = app.openapi(
  postXAmzTargetOpsWorks20130218UpdateLayerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
