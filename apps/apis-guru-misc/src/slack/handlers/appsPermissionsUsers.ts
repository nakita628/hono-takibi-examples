import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsPermissionsUsersListRoute, getAppsPermissionsUsersRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const appsPermissionsUsersHandler = app
  .openapi(getAppsPermissionsUsersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsPermissionsUsersRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
