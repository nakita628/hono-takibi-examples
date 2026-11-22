import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPicoSettingsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const picoSettingsHandler = app.openapi(getApiPicoSettingsIdRoute, (c) => {
  throw new Error('Not implemented')
})
