import { OpenAPIHono } from '@hono/zod-openapi'
import { getIconPngRoute } from '../routes'

const app = new OpenAPIHono()

export const iconPngHandler = app.openapi(getIconPngRoute, (c) => {
  throw new Error('Not implemented')
})
