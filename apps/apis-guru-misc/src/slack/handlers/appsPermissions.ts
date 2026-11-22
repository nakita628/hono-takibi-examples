import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsPermissionsInfoRoute, getAppsPermissionsRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const appsPermissionsHandler = app
  .openapi(getAppsPermissionsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsPermissionsRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
