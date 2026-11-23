import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteViewsViewIdRoute, getViewsViewIdRoute } from '../routes'

export const deleteViewsViewIdRouteHandler: RouteHandler<typeof deleteViewsViewIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getViewsViewIdRouteHandler: RouteHandler<typeof getViewsViewIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
