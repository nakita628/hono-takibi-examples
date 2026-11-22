import { OpenAPIHono } from '@hono/zod-openapi'
import { getRadarSearchGlobalRoute } from '../routes'

const app = new OpenAPIHono()

export const radarSearchHandler = app.openapi(getRadarSearchGlobalRoute, (c) => {
  throw new Error('Not implemented')
})
