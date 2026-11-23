import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRestoreImageFromRecycleBinRoute,
  postActionRestoreImageFromRecycleBinRoute,
} from '../routes'

export const getActionRestoreImageFromRecycleBinRouteHandler: RouteHandler<
  typeof getActionRestoreImageFromRecycleBinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestoreImageFromRecycleBinRouteHandler: RouteHandler<
  typeof postActionRestoreImageFromRecycleBinRoute
> = async (c) => {
  throw new Error('Not implemented')
}
