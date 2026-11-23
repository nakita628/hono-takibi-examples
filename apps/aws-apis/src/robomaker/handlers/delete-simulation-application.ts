import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteSimulationApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteSimulationApplicationHandler = app.openapi(
  postDeleteSimulationApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
