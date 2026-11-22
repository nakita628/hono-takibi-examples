import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsPermissionsScopesListRoute } from '../routes'

const app = new OpenAPIHono()

export const appsPermissionsScopesHandler = app.openapi(getAppsPermissionsScopesListRoute, (c) => {
  throw new Error('Not implemented')
})
