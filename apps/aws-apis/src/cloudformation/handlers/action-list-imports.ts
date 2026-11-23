import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListImportsRoute, postActionListImportsRoute } from '../routes'

export const getActionListImportsRouteHandler: RouteHandler<
  typeof getActionListImportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListImportsRouteHandler: RouteHandler<
  typeof postActionListImportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
