import { OpenAPIHono } from '@hono/zod-openapi'
import { getThemesFontsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const themesFontsHandler = app.openapi(getThemesFontsIdRoute, (c) => {
  throw new Error('Not implemented')
})
