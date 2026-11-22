import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218CloneStackRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218CloneStackHandler = app.openapi(
  postXAmzTargetOpsWorks20130218CloneStackRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
