import { OpenAPIHono } from '@hono/zod-openapi'
import { getShuttleDiscoveredSubjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const shuttleDiscoveredSubjectsHandler = app.openapi(
  getShuttleDiscoveredSubjectsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
