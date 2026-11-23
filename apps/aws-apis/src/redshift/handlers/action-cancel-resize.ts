import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCancelResizeRoute, postActionCancelResizeRoute } from '../routes'

export const getActionCancelResizeRouteHandler: RouteHandler<
  typeof getActionCancelResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelResizeRouteHandler: RouteHandler<
  typeof postActionCancelResizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
