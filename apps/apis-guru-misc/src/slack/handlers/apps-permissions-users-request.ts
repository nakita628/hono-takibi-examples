import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsPermissionsUsersRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const appsPermissionsUsersRequestHandler = app.openapi(
  getAppsPermissionsUsersRequestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
