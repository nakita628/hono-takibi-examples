import { OpenAPIHono } from '@hono/zod-openapi'
import { getPluginsSlugRoute } from '../routes'

const app = new OpenAPIHono()

export const pluginsHandler = app.openapi(getPluginsSlugRoute, (c) => {
  throw new Error('Not implemented')
})
