import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCADeletePermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAcmPrivateCaDeletePermissionHandler = app.openapi(
  postXAmzTargetACMPrivateCADeletePermissionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
