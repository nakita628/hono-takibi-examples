import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyIdFormatRoute, postActionModifyIdFormatRoute } from '../routes'

export const getActionModifyIdFormatRouteHandler: RouteHandler<
  typeof getActionModifyIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyIdFormatRouteHandler: RouteHandler<
  typeof postActionModifyIdFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
