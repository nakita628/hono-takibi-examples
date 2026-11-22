import { OpenAPIHono } from '@hono/zod-openapi'
import { getStationsRoute } from '../routes'

const app = new OpenAPIHono()

export const stationsHandler = app.openapi(getStationsRoute, (c) => {
  throw new Error('Not implemented')
})
