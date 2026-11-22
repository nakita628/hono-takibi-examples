import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSimulationsSimulationIdRunsSimulationRunIdEventsRoute,
  getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdRoute,
  postSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simulationRunEventsHandler = app
  .openapi(getSimulationsSimulationIdRunsSimulationRunIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplayRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
