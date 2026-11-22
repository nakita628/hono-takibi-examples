import { OpenAPIHono } from '@hono/zod-openapi'
import { getIncidentsRoute } from '../routes'

const app = new OpenAPIHono()

export const timelineHandler = app.openapi(getIncidentsRoute, (c) => {
  throw new Error('Not implemented')
})
