import type { RouteHandler } from '@hono/zod-openapi'
import type { getGrantsIdRoute, getGrantsRoute, postGrantsRoute } from '../routes'

export const getGrantsRouteHandler: RouteHandler<typeof getGrantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGrantsRouteHandler: RouteHandler<typeof postGrantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGrantsIdRouteHandler: RouteHandler<typeof getGrantsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
