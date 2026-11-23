import { OpenAPIHono } from '@hono/zod-openapi'
import { getSimulationTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const simulationTypesHandler = app.openapi(getSimulationTypesRoute, (c) => {
  throw new Error('Not implemented')
})
