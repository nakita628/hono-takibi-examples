import type { RouteHandler } from '@hono/zod-openapi'
import type { getNewApikeyRoute, getNewGroupRoute, getNewServiceRoute } from '../routes'

export const getNewApikeyRouteHandler: RouteHandler<typeof getNewApikeyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getNewGroupRouteHandler: RouteHandler<typeof getNewGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getNewServiceRouteHandler: RouteHandler<typeof getNewServiceRoute> = async (c) => {
  throw new Error('Not implemented')
}
