import { OpenAPIHono } from '@hono/zod-openapi'
import { getIncidentsRoute } from '../routes'

const app = new OpenAPIHono()

export const incidentsHandler = app.openapi(getIncidentsRoute, (c) => {
  throw new Error('Not implemented')
})
