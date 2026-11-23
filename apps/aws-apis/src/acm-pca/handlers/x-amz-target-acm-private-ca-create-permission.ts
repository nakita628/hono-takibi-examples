import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCACreatePermissionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAcmPrivateCaCreatePermissionHandler = app.openapi(
  postXAmzTargetACMPrivateCACreatePermissionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
