import type { RouteHandler } from '@hono/zod-openapi'
import type { getListsIdRoute, getListsRoute } from '../routes'

export const getListsRouteHandler: RouteHandler<typeof getListsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getListsIdRouteHandler: RouteHandler<typeof getListsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
