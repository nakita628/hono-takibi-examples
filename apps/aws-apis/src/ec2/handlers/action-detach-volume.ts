import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDetachVolumeRoute, postActionDetachVolumeRoute } from '../routes'

export const getActionDetachVolumeRouteHandler: RouteHandler<
  typeof getActionDetachVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDetachVolumeRouteHandler: RouteHandler<
  typeof postActionDetachVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
