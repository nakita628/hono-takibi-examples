import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateVolumeRoute, postActionCreateVolumeRoute } from '../routes'

export const getActionCreateVolumeRouteHandler: RouteHandler<
  typeof getActionCreateVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateVolumeRouteHandler: RouteHandler<
  typeof postActionCreateVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
