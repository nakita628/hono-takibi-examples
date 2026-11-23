import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionIndexDocumentsRoute, postActionIndexDocumentsRoute } from '../routes'

export const getActionIndexDocumentsRouteHandler: RouteHandler<
  typeof getActionIndexDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionIndexDocumentsRouteHandler: RouteHandler<
  typeof postActionIndexDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
