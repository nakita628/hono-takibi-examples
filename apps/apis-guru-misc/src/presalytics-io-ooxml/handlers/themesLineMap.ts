import { OpenAPIHono } from '@hono/zod-openapi'
import { getThemesLineMapIdRoute } from '../routes'

const app = new OpenAPIHono()

export const themesLineMapHandler = app.openapi(getThemesLineMapIdRoute, (c) => {
  throw new Error('Not implemented')
})
