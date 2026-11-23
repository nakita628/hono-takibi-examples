import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionExportImageRoute, postActionExportImageRoute } from '../routes'

export const getActionExportImageRouteHandler: RouteHandler<
  typeof getActionExportImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionExportImageRouteHandler: RouteHandler<
  typeof postActionExportImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
