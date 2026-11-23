import type { RouteHandler } from '@hono/zod-openapi'
import type { getEntityV1RelationRoute, getEntityV1Route } from '../routes'

export const getEntityV1RouteHandler: RouteHandler<typeof getEntityV1Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getEntityV1RelationRouteHandler: RouteHandler<
  typeof getEntityV1RelationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
