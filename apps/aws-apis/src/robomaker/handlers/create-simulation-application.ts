import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateSimulationApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const createSimulationApplicationHandler = app.openapi(
  postCreateSimulationApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
