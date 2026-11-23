import type { RouteHandler } from '@hono/zod-openapi'
import type { getViewFolderRoute, getViewFolderUniquePathsRoute } from '../routes'

export const getViewFolderRouteHandler: RouteHandler<typeof getViewFolderRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getViewFolderUniquePathsRouteHandler: RouteHandler<
  typeof getViewFolderUniquePathsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
