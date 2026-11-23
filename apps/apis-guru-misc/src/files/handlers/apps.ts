import { OpenAPIHono } from '@hono/zod-openapi'
import { getAppsRoute } from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app.openapi(getAppsRoute, (c) => {
  throw new Error('Not implemented')
})
