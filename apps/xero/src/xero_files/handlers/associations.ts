import type { RouteHandler } from '@hono/zod-openapi'
import type { getAssociationsCountRoute, getAssociationsObjectIdRoute } from '../routes'

export const getAssociationsObjectIdRouteHandler: RouteHandler<
  typeof getAssociationsObjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssociationsCountRouteHandler: RouteHandler<
  typeof getAssociationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
