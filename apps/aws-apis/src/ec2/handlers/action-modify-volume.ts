import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyVolumeRoute, postActionModifyVolumeRoute } from '../routes'

export const getActionModifyVolumeRouteHandler: RouteHandler<
  typeof getActionModifyVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVolumeRouteHandler: RouteHandler<
  typeof postActionModifyVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
