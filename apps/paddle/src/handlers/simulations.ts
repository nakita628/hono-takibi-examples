import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getSimulationsRouteHandler: RouteHandler<typeof getSimulationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSimulationsRouteHandler: RouteHandler<typeof postSimulationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSimulationsSimulationIdRouteHandler: RouteHandler<
  typeof getSimulationsSimulationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSimulationsSimulationIdRouteHandler: RouteHandler<
  typeof patchSimulationsSimulationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSimulationsSimulationIdRunsRouteHandler: RouteHandler<
  typeof getSimulationsSimulationIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSimulationsSimulationIdRunsRouteHandler: RouteHandler<
  typeof postSimulationsSimulationIdRunsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSimulationsSimulationIdRunsSimulationRunIdRouteHandler: RouteHandler<
  typeof getSimulationsSimulationIdRunsSimulationRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSimulationsSimulationIdRunsSimulationRunIdEventsRouteHandler: RouteHandler<
  typeof getSimulationsSimulationIdRunsSimulationRunIdEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdRouteHandler: RouteHandler<
  typeof getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplayRouteHandler: RouteHandler<
  typeof postSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
