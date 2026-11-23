import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteCoipPoolRoute, postActionDeleteCoipPoolRoute } from '../routes'

export const getActionDeleteCoipPoolRouteHandler: RouteHandler<
  typeof getActionDeleteCoipPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteCoipPoolRouteHandler: RouteHandler<
  typeof postActionDeleteCoipPoolRoute
> = async (c) => {
  throw new Error('Not implemented')
}
