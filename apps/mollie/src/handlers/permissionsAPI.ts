import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2PermissionsPermissionIdRoute, getV2PermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const permissionsAPIHandler = app
  .openapi(getV2PermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
