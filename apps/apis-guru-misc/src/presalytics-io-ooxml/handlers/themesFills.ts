import { OpenAPIHono } from '@hono/zod-openapi'
import { getThemesFillsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const themesFillsHandler = app.openapi(getThemesFillsIdRoute, (c) => {
  throw new Error('Not implemented')
})
