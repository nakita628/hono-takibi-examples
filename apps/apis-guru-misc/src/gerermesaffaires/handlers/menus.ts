import type { RouteHandler } from '@hono/zod-openapi'
import type { getMenusRoute, postMenusMenuIdDocumentsRoute } from '../routes'

export const getMenusRouteHandler: RouteHandler<typeof getMenusRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMenusMenuIdDocumentsRouteHandler: RouteHandler<
  typeof postMenusMenuIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
