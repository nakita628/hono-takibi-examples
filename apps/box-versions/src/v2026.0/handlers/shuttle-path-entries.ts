import { OpenAPIHono } from '@hono/zod-openapi'
import { getShuttlePathEntriesRoute } from '../routes'

const app = new OpenAPIHono()

export const shuttlePathEntriesHandler = app.openapi(getShuttlePathEntriesRoute, (c) => {
  throw new Error('Not implemented')
})
