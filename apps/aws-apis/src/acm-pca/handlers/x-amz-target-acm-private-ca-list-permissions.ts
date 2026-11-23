import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCAListPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAcmPrivateCaListPermissionsHandler = app.openapi(
  postXAmzTargetACMPrivateCAListPermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
