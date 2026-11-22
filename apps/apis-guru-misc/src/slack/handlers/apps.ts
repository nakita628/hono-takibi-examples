import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsUninstallRoute } from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app.openapi(getAppsUninstallRoute, (c) => {
  throw new Error('Not implemented')
})
