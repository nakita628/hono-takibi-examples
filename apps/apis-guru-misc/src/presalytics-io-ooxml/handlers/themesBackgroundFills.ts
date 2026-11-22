import { OpenAPIHono } from '@hono/zod-openapi'
import { getThemesBackgroundFillsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const themesBackgroundFillsHandler = app.openapi(getThemesBackgroundFillsIdRoute, (c) => {
  throw new Error('Not implemented')
})
