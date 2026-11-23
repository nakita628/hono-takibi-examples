import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAttachVolumeRoute, postActionAttachVolumeRoute } from '../routes'

export const getActionAttachVolumeRouteHandler: RouteHandler<
  typeof getActionAttachVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachVolumeRouteHandler: RouteHandler<
  typeof postActionAttachVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
