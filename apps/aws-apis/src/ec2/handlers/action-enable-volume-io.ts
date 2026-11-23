import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionEnableVolumeIORoute, postActionEnableVolumeIORoute } from '../routes'

export const getActionEnableVolumeIORouteHandler: RouteHandler<
  typeof getActionEnableVolumeIORoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableVolumeIORouteHandler: RouteHandler<
  typeof postActionEnableVolumeIORoute
> = async (c) => {
  throw new Error('Not implemented')
}
