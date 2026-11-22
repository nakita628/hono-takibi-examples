import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsPermissionsResourcesListRoute } from '../routes'

const app = new OpenAPIHono()

export const appsPermissionsResourcesHandler = app.openapi(
  getAppsPermissionsResourcesListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
