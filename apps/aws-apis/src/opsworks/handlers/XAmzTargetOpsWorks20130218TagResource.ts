import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218TagResourceHandler = app.openapi(
  postXAmzTargetOpsWorks20130218TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
