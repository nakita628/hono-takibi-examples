import type { RouteHandler } from '@hono/zod-openapi'
import type { getServicesIdRoute, getServicesRoute, putServicesIdRoute } from '../routes'

export const getServicesRouteHandler: RouteHandler<typeof getServicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getServicesIdRouteHandler: RouteHandler<typeof getServicesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putServicesIdRouteHandler: RouteHandler<typeof putServicesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
