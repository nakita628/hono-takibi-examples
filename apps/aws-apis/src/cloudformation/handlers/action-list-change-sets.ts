import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListChangeSetsRoute, postActionListChangeSetsRoute } from '../routes'

export const getActionListChangeSetsRouteHandler: RouteHandler<
  typeof getActionListChangeSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListChangeSetsRouteHandler: RouteHandler<
  typeof postActionListChangeSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
