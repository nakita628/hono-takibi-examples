import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteInfoMessagesMessageIdRoute,
  getInfoClientRoute,
  getInfoDatabaseRoute,
  getInfoFtlRoute,
  getInfoHostRoute,
  getInfoLoginRoute,
  getInfoMessagesCountRoute,
  getInfoMessagesRoute,
  getInfoMetricsRoute,
  getInfoSensorsRoute,
  getInfoSystemRoute,
  getInfoVersionRoute,
} from '../routes'

export const getInfoClientRouteHandler: RouteHandler<typeof getInfoClientRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoSystemRouteHandler: RouteHandler<typeof getInfoSystemRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoDatabaseRouteHandler: RouteHandler<typeof getInfoDatabaseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoFtlRouteHandler: RouteHandler<typeof getInfoFtlRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoHostRouteHandler: RouteHandler<typeof getInfoHostRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoSensorsRouteHandler: RouteHandler<typeof getInfoSensorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoVersionRouteHandler: RouteHandler<typeof getInfoVersionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoMessagesRouteHandler: RouteHandler<typeof getInfoMessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInfoMessagesMessageIdRouteHandler: RouteHandler<
  typeof deleteInfoMessagesMessageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoMessagesCountRouteHandler: RouteHandler<
  typeof getInfoMessagesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoMetricsRouteHandler: RouteHandler<typeof getInfoMetricsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInfoLoginRouteHandler: RouteHandler<typeof getInfoLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}
