import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionImportVolumeRoute, postActionImportVolumeRoute } from '../routes'

export const getActionImportVolumeRouteHandler: RouteHandler<
  typeof getActionImportVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionImportVolumeRouteHandler: RouteHandler<
  typeof postActionImportVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
