import { OpenAPIHono } from '@hono/zod-openapi'
import { getThemesCustomColorsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const themesCustomColorsHandler = app.openapi(getThemesCustomColorsIdRoute, (c) => {
  throw new Error('Not implemented')
})
