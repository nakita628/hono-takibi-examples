import { OpenAPIHono } from '@hono/zod-openapi'
import { postListSimulationApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const listSimulationApplicationsHandler = app.openapi(
  postListSimulationApplicationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
