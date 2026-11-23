import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DeleteLayerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218DeleteLayerHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DeleteLayerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
