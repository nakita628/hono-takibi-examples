import { OpenAPIHono } from '@hono/zod-openapi'
import { getAndroidenterpriseV1PermissionsPermissionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const permissionsHandler = app.openapi(
  getAndroidenterpriseV1PermissionsPermissionIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
