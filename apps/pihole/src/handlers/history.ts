import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getHistoryClientsRoute,
  getHistoryDatabaseClientsRoute,
  getHistoryDatabaseRoute,
  getHistoryRoute,
} from '../routes'

export const getHistoryRouteHandler: RouteHandler<typeof getHistoryRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHistoryClientsRouteHandler: RouteHandler<typeof getHistoryClientsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getHistoryDatabaseRouteHandler: RouteHandler<typeof getHistoryDatabaseRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getHistoryDatabaseClientsRouteHandler: RouteHandler<
  typeof getHistoryDatabaseClientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
