import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMonitorsIdRoute,
  getMonitorsIdRoute,
  getMonitorsIdRunsRoute,
  getMonitorsIdRunsRunIdRoute,
  getMonitorsRoute,
  patchMonitorsIdRoute,
  postMonitorsBatchRoute,
  postMonitorsIdTriggerRoute,
  postMonitorsRoute,
} from '../routes'

export const postMonitorsRouteHandler: RouteHandler<typeof postMonitorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMonitorsRouteHandler: RouteHandler<typeof getMonitorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMonitorsBatchRouteHandler: RouteHandler<typeof postMonitorsBatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMonitorsIdRouteHandler: RouteHandler<typeof getMonitorsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMonitorsIdRouteHandler: RouteHandler<typeof patchMonitorsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMonitorsIdRouteHandler: RouteHandler<typeof deleteMonitorsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMonitorsIdTriggerRouteHandler: RouteHandler<
  typeof postMonitorsIdTriggerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMonitorsIdRunsRouteHandler: RouteHandler<typeof getMonitorsIdRunsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMonitorsIdRunsRunIdRouteHandler: RouteHandler<
  typeof getMonitorsIdRunsRunIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
