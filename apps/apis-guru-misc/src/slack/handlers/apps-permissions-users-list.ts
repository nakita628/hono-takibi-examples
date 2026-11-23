import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsPermissionsUsersListRoute } from '../routes'

const app = new OpenAPIHono()

export const appsPermissionsUsersListHandler = app.openapi(
  getAppsPermissionsUsersListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
