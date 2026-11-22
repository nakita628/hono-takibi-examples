import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218UpdateStackRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218UpdateStackHandler = app.openapi(
  postXAmzTargetOpsWorks20130218UpdateStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
