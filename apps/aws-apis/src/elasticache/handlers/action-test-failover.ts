import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionTestFailoverRoute, postActionTestFailoverRoute } from '../routes'

export const getActionTestFailoverRouteHandler: RouteHandler<
  typeof getActionTestFailoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionTestFailoverRouteHandler: RouteHandler<
  typeof postActionTestFailoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}
