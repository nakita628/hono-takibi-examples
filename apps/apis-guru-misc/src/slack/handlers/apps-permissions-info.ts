import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsPermissionsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const appsPermissionsInfoHandler = app.openapi(getAppsPermissionsInfoRoute, (c) => {
  throw new Error('Not implemented')
})
