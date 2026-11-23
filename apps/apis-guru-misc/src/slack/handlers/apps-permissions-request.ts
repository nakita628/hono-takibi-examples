import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsPermissionsRequestRoute } from '../routes'

const app = new OpenAPIHono()

export const appsPermissionsRequestHandler = app.openapi(getAppsPermissionsRequestRoute, (c) => {
  throw new Error('Not implemented')
})
