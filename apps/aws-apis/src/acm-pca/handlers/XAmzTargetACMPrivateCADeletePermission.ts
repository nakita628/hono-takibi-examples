import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCADeletePermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCADeletePermissionHandler = app.openapi(
  postXAmzTargetACMPrivateCADeletePermissionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
