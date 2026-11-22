import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218CreateStackRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218CreateStackHandler = app.openapi(
  postXAmzTargetOpsWorks20130218CreateStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
