import { OpenAPIHono } from '@hono/zod-openapi'
import { getReloadconfigRoute } from '../routes'

const app = new OpenAPIHono()

export const reloadconfigHandler = app.openapi(getReloadconfigRoute, (c) => {
  throw new Error('Not implemented')
})
