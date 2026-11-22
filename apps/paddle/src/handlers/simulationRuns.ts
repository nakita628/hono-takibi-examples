import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSimulationsSimulationIdRunsRoute,
  getSimulationsSimulationIdRunsSimulationRunIdRoute,
  postSimulationsSimulationIdRunsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simulationRunsHandler = app
  .openapi(getSimulationsSimulationIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsSimulationIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimulationsSimulationIdRunsSimulationRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
