import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionApplicationIDConnectedClientBusinessesRoute } from '../routes'

const app = new OpenAPIHono()

export const applicationBusinessConnectionsHandler = app.openapi(
  getVersionApplicationIDConnectedClientBusinessesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
