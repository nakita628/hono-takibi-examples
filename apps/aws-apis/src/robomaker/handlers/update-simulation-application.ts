import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateSimulationApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const updateSimulationApplicationHandler = app.openapi(
  postUpdateSimulationApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
