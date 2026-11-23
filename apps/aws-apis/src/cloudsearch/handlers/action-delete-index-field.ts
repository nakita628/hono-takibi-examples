import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteIndexFieldRoute, postActionDeleteIndexFieldRoute } from '../routes'

export const getActionDeleteIndexFieldRouteHandler: RouteHandler<
  typeof getActionDeleteIndexFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteIndexFieldRouteHandler: RouteHandler<
  typeof postActionDeleteIndexFieldRoute
> = async (c) => {
  throw new Error('Not implemented')
}
