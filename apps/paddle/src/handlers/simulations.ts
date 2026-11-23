import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSimulationsRoute,
  getSimulationsSimulationIdRoute,
  getSimulationsSimulationIdRunsRoute,
  getSimulationsSimulationIdRunsSimulationRunIdEventsRoute,
  getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdRoute,
  getSimulationsSimulationIdRunsSimulationRunIdRoute,
  patchSimulationsSimulationIdRoute,
  postSimulationsRoute,
  postSimulationsSimulationIdRunsRoute,
  postSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const simulationsHandler = app
  .openapi(getSimulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimulationsSimulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSimulationsSimulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimulationsSimulationIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSimulationsSimulationIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSimulationsSimulationIdRunsSimulationRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
