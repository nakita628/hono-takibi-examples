import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListIdentitiesRoute, postActionListIdentitiesRoute } from '../routes'

export const getActionListIdentitiesRouteHandler: RouteHandler<
  typeof getActionListIdentitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListIdentitiesRouteHandler: RouteHandler<
  typeof postActionListIdentitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
