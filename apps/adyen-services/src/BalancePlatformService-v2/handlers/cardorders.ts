import type { RouteHandler } from '@hono/zod-openapi'
import type { getCardordersIdItemsRoute, getCardordersRoute } from '../routes'

export const getCardordersRouteHandler: RouteHandler<typeof getCardordersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCardordersIdItemsRouteHandler: RouteHandler<
  typeof getCardordersIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
