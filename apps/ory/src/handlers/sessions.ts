import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSessionsIdRoute,
  deleteSessionsRoute,
  getSessionsRoute,
  getSessionsTokenExchangeRoute,
  getSessionsWhoamiRoute,
} from '../routes'

export const deleteSessionsRouteHandler: RouteHandler<typeof deleteSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionsRouteHandler: RouteHandler<typeof getSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionsTokenExchangeRouteHandler: RouteHandler<
  typeof getSessionsTokenExchangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionsWhoamiRouteHandler: RouteHandler<typeof getSessionsWhoamiRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteSessionsIdRouteHandler: RouteHandler<typeof deleteSessionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
