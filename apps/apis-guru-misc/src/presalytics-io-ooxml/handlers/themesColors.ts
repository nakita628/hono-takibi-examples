import { OpenAPIHono } from '@hono/zod-openapi'
import { getThemesColorsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const themesColorsHandler = app.openapi(getThemesColorsIdRoute, (c) => {
  throw new Error('Not implemented')
})
