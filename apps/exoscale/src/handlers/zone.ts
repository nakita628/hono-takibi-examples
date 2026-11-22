import { OpenAPIHono } from '@hono/zod-openapi'
import { getZoneRoute } from '../routes'

const app = new OpenAPIHono()

export const zoneHandler = app.openapi(getZoneRoute, (c) => {
  throw new Error('Not implemented')
})
