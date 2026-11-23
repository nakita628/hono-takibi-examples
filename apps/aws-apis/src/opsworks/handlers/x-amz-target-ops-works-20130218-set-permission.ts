import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218SetPermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218SetPermissionHandler = app.openapi(
  postXAmzTargetOpsWorks20130218SetPermissionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
