import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateSimulationApplicationVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const createSimulationApplicationVersionHandler = app.openapi(
  postCreateSimulationApplicationVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
