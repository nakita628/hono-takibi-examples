import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsUninstallRoute } from '../routes'

const app = new OpenAPIHono()

export const appsUninstallHandler = app.openapi(getAppsUninstallRoute, (c) => {
  throw new Error('Not implemented')
})
