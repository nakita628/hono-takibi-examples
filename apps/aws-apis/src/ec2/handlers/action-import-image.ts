import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionImportImageRoute, postActionImportImageRoute } from '../routes'

export const getActionImportImageRouteHandler: RouteHandler<
  typeof getActionImportImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionImportImageRouteHandler: RouteHandler<
  typeof postActionImportImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
