import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteFleetsRoute, postActionDeleteFleetsRoute } from '../routes'

export const getActionDeleteFleetsRouteHandler: RouteHandler<
  typeof getActionDeleteFleetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteFleetsRouteHandler: RouteHandler<
  typeof postActionDeleteFleetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
