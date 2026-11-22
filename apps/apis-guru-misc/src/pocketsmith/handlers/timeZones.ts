import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimeZonesRoute } from '../routes'

const app = new OpenAPIHono()

export const timeZonesHandler = app.openapi(getTimeZonesRoute, (c) => {
  throw new Error('Not implemented')
})
