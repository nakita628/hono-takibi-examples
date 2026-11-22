import { OpenAPIHono } from '@hono/zod-openapi'
import { getThemesEffectMapIdRoute } from '../routes'

const app = new OpenAPIHono()

export const themesEffectMapHandler = app.openapi(getThemesEffectMapIdRoute, (c) => {
  throw new Error('Not implemented')
})
