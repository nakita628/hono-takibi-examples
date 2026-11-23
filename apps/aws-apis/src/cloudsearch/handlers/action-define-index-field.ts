import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDefineIndexFieldRoute, postActionDefineIndexFieldRoute } from '../routes'

export const getActionDefineIndexFieldRouteHandler: RouteHandler<
  typeof getActionDefineIndexFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDefineIndexFieldRouteHandler: RouteHandler<
  typeof postActionDefineIndexFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}
