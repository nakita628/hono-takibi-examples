import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteVolumeRoute, postActionDeleteVolumeRoute } from '../routes'

export const getActionDeleteVolumeRouteHandler: RouteHandler<
  typeof getActionDeleteVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteVolumeRouteHandler: RouteHandler<
  typeof postActionDeleteVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
